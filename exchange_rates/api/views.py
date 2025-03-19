from rest_framework.decorators import action, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny  # Импортируем AllowAny
from rest_framework.response import Response
from rest_framework import viewsets, status
from django.core.cache import cache
from decimal import Decimal
from ..models import ExchangeRate
from ..services import ExchangeRateService
from .serializers import ExchangeRateSerializer


class ExchangeRateViewSet(viewsets.ModelViewSet):
    """API endpoint для управления курсами валют"""
    queryset = ExchangeRate.objects.all()
    serializer_class = ExchangeRateSerializer

    def get_permissions(self):
        if self.action == 'create':  # Метод POST
            return [IsAuthenticated()]  # Требуем авторизацию для создания
        return [AllowAny()]  # Для остальных действий разрешаем доступ всем

    def list(self, request, *args, **kwargs):
        """Переопределяем list для автоматического обновления курсов"""
        # Проверяем кэш
        cached_data = cache.get('exchange_rates')
        if cached_data:
            return Response(cached_data)

        # Обновление курсов для источников 'garantex' и 'cbr'
        self.update_rates()

        # Сериализуем данные и добавляем в кэш
        serializer = self.get_serializer(self.get_queryset(), many=True)
        data = serializer.data
        cache.set('exchange_rates', data, timeout=60)  # Кэшируем на 60 секунд
        return Response(data)

    def update_rates(self):
        """Обновление курсов валют из внешних источников"""
        for rate in self.get_queryset():
            if rate.USD_source == 'garantex':
                new_usd_rate = ExchangeRateService.update_garantex_rate()
                if new_usd_rate:
                    rate.USD_rate = new_usd_rate

            if rate.EUR_source == 'cbr':
                new_eur_rate = ExchangeRateService.update_cbr_rate('EUR')
                if new_eur_rate:
                    rate.EUR_rate = new_eur_rate

            rate.save()

    @action(detail=False, methods=['post'])
    def set_manual_rate(self, request):
        """Установка курса вручную"""
        currency = request.data.get('currency')
        rate = request.data.get('rate')

        if not currency or not rate:
            return Response({'error': 'Необходимо указать currency и rate'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            ExchangeRateService.set_manual_rate(currency=currency, rate=Decimal(str(rate)))
            return Response({'status': 'success', 'rates': ExchangeRateService.get_current_rates()})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def get_cbr_rates(self, request):
        """Получение курсов с API ЦБ РФ"""
        try:
            usd_rate = ExchangeRateService.update_cbr_rate('USD')
            eur_rate = ExchangeRateService.update_cbr_rate('EUR')
            return Response({
                'USD': {'rate': float(usd_rate), 'source': 'ЦБ РФ'},
                'EUR': {'rate': float(eur_rate), 'source': 'ЦБ РФ'}
            })
        except Exception as e:
            return Response({'error': f'Ошибка при получении данных ЦБ РФ: {str(e)}'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=False, methods=['get'])
    def get_usdt_rate(self, request):
        """Получение курса USDT напрямую из BestChange"""
        try:
            rate = ExchangeRateService.update_garantex_rate()
            return Response({'USD': {'rate': float(rate), 'source': 'BestChange'}})
        except Exception as e:
            return Response({'error': f'Ошибка при получении данных BestChange: {str(e)}'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
