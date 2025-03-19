from django.contrib import admin
from .models import ExchangeRate
from .services import ExchangeRateService

@admin.register(ExchangeRate)
class ExchangeRateAdmin(admin.ModelAdmin):
    list_display = ('USD_rate', 'USD_source', 'last_updated')
    readonly_fields = ('last_updated',)

    def save_model(self, request, obj, form, change):
        """Обновляем курс USD, если выбран источник BestChange"""
        if obj.USD_source == 'garantex':
            rate = ExchangeRateService.update_garantex_rate()
            if rate is not None:
                obj.USD_rate = rate
        super().save_model(request, obj, form, change)
