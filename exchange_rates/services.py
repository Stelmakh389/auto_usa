from decimal import Decimal
import requests
from bs4 import BeautifulSoup
import re
import statistics


class ExchangeRateService:
    @staticmethod
    def update_cbr_rate(currency: str) -> Decimal:
        """Получение курса валюты из ЦБ РФ"""
        url = "https://www.cbr-xml-daily.ru/daily_json.js"
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            data = response.json()
            return Decimal(data['Valute'][currency]['Value'])
        except (KeyError, requests.RequestException) as e:
            print(f"Ошибка при обновлении курса {currency}: {e}")
            return None

    @staticmethod
    def update_garantex_rate() -> Decimal:
        """Получение среднего курса USDT из BestChange"""
        url = "https://www.bestchange.com/cash-ruble-to-tether-trc20.html"
        
        # Определяем заголовки для имитации браузера
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        
        try:
            # Выполняем HTTP-запрос
            response = requests.get(url, headers=headers, timeout=10)
            response.raise_for_status()  # Проверяем успешность запроса
            
            # Парсим HTML
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Находим таблицу с курсами обмена
            exchange_table = soup.find('table', id='content_table')
            
            if not exchange_table:
                print("Таблица с курсами не найдена")
                return None
            
            # Находим строки таблицы (первые 10 обменников)
            rows = exchange_table.find_all('tr')[1:11]  # Пропускаем заголовок таблицы
            
            rates = []
            
            for row in rows:
                # Получаем ячейку с курсом обмена (RUB Sberbank)
                rate_cell = row.find('div', class_='fs')
                if rate_cell:
                    # Извлекаем числовое значение курса
                    rate_text = rate_cell.text.strip()
                    match = re.search(r'(\d+\.\d+)', rate_text)
                    if match:
                        rate_value = float(match.group(1))
                        rates.append(rate_value)
            
            if rates:
                avg_rate = statistics.mean(rates)
                return Decimal(str(avg_rate))
            else:
                print("Курсы не найдены")
                return None
                
        except (requests.RequestException, ValueError, TypeError) as e:
            print(f"Ошибка при получении курса USDT: {e}")
            return None

    @staticmethod
    def set_manual_rate(currency: str, rate: Decimal):
        """Установка курса вручную"""
        from .models import ExchangeRate
        
        try:
            # Получаем первую запись или создаем новую, если записей нет
            exchange_rate, created = ExchangeRate.objects.get_or_create(id=1)
            
            if currency.upper() == 'USD':
                exchange_rate.USD_rate = rate
                exchange_rate.USD_source = 'manual'
            elif currency.upper() == 'EUR':
                exchange_rate.EUR_rate = rate
                exchange_rate.EUR_source = 'manual'
            else:
                raise ValueError(f"Неизвестная валюта: {currency}")
            
            exchange_rate.save()
            return True
        except Exception as e:
            print(f"Ошибка при установке курса вручную: {e}")
            raise

    @staticmethod
    def get_current_rates():
        """Получение текущих курсов валют из базы данных"""
        from .models import ExchangeRate

        try:
            return {
                rate.USD_source: {
                    'USD_rate': float(rate.USD_rate),
                    'EUR_rate': float(rate.EUR_rate),
                    'last_updated': rate.last_updated.strftime('%Y-%m-%d %H:%M:%S'),
                }
                for rate in ExchangeRate.objects.all()
            }
        except Exception as e:
            print(f"Ошибка при получении текущих курсов: {e}")
            return None
