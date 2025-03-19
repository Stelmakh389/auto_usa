from django.db import models
from decimal import Decimal
from .services import ExchangeRateService  # Если используется логика обновления курса

class ExchangeRate(models.Model):
    SOURCE_CHOICES = [
        ('manual', 'Ручной ввод'),
        ('cbr', 'ЦБ РФ'),
        ('garantex', 'BestChange'),
    ]

    SOURCE_CHOICES_EUR = [
        ('manual', 'Ручной ввод'),
        ('cbr', 'ЦБ РФ'),
    ]
    
    USD_rate = models.DecimalField(
        'Курс USD',
        max_digits=10,
        decimal_places=2,
        default=Decimal('0.00')
    )
    USD_source = models.CharField(
        'Источник USD',
        max_length=10,
        choices=SOURCE_CHOICES,  # Все источники, включая BestChange (бывший Garantex)
        default='manual'
    )
    
    EUR_rate = models.DecimalField(
        'Курс EUR',
        max_digits=10,
        decimal_places=2,
        default=Decimal('0.00')
    )
    EUR_source = models.CharField(
        'Источник EUR',
        max_length=10,
        choices=SOURCE_CHOICES_EUR,  # Только ручной ввод и ЦБ РФ
        default='manual'
    )
    last_updated = models.DateTimeField(
        'Последнее обновление',
        auto_now=True
    )

    def save(self, *args, **kwargs):
        # Проверяем источник для USD
        if self.USD_source == 'cbr':
            updated_usd = ExchangeRateService.update_cbr_rate('USD')  # Метод для обновления курса USD через ЦБ РФ
            if updated_usd:
                self.USD_rate = updated_usd
        
        elif self.USD_source == 'garantex':
            updated_usd = ExchangeRateService.update_garantex_rate()  # Метод для обновления курса USD через BestChange
            if updated_usd:
                self.USD_rate = updated_usd

        # Проверяем источник для EUR
        if self.EUR_source == 'cbr':
            updated_eur = ExchangeRateService.update_cbr_rate('EUR')  # Метод для обновления курса EUR через ЦБ РФ
            if updated_eur:
                self.EUR_rate = updated_eur
        
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'Курс валюты'
        verbose_name_plural = 'Курсы валют'

    def __str__(self):
        return f"USD: {self.USD_rate} ({self.USD_source}), EUR: {self.EUR_rate} ({self.EUR_source})"
