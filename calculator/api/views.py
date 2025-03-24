from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.response import Response
from ..models import Auction, Location, Port
from .serializers import AuctionSerializer, LocationSerializer, PortSerializer


class PortViewSet(viewsets.ModelViewSet):
    """API для управления портами"""
    queryset = Port.objects.all()
    serializer_class = PortSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdminUser()]  # Только администраторы могут создавать, обновлять и удалять
        return [AllowAny()]  # Для GET запросов разрешаем доступ всем


class AuctionViewSet(viewsets.ModelViewSet):
    """API для управления аукционами"""
    queryset = Auction.objects.all()
    serializer_class = AuctionSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy', 'toggle_active']:
            return [IsAdminUser()]  # Только администраторы могут создавать, обновлять и удалять
        return [AllowAny()]  # Для GET запросов разрешаем доступ всем

    @action(detail=True, methods=['post'])
    def toggle_active(self, request, pk=None):
        """Активация/деактивация аукциона"""
        auction = self.get_object()
        auction.is_active = not auction.is_active
        auction.save()
        return Response({'status': 'success'})


class LocationViewSet(viewsets.ModelViewSet):
    """API для управления локациями"""
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdminUser()]  # Только администраторы могут создавать, обновлять и удалять
        return [AllowAny()]  # Для GET запросов разрешаем доступ всем

    def get_queryset(self):
        """Фильтрация по типу аукциона"""
        queryset = Location.objects.all().order_by('name')
        auction_type = self.request.query_params.get('auction_type', None)
        if auction_type:
            queryset = queryset.filter(auction__auction_type=auction_type)
        return queryset

    def create(self, request, *args, **kwargs):
        """Создание локации"""
        auction_id = request.data.get('auction')
        port_id = request.data.get('port')

        # Проверяем, что указанные аукцион и порт существуют
        try:
            Auction.objects.get(id=auction_id)
            Port.objects.get(id=port_id)
        except Auction.DoesNotExist:
            return Response({'error': 'Аукцион не найден'}, status=status.HTTP_400_BAD_REQUEST)
        except Port.DoesNotExist:
            return Response({'error': 'Порт не найден'}, status=status.HTTP_400_BAD_REQUEST)

        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        """Обновление локации"""
        auction_id = request.data.get('auction')
        port_id = request.data.get('port')

        # Проверяем, что указанные аукцион и порт существуют
        try:
            Auction.objects.get(id=auction_id)
            Port.objects.get(id=port_id)
        except Auction.DoesNotExist:
            return Response({'error': 'Аукцион не найден'}, status=status.HTTP_400_BAD_REQUEST)
        except Port.DoesNotExist:
            return Response({'error': 'Порт не найден'}, status=status.HTTP_400_BAD_REQUEST)

        return super().update(request, *args, **kwargs)
