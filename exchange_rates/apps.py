from django.apps import AppConfig

class ExchangeRatesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'exchange_rates'
    verbose_name = 'Курсы валют'