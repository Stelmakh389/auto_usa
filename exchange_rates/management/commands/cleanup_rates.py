# exchange_rates/management/commands/cleanup_rates.py
from django.core.management.base import BaseCommand
from exchange_rates.models import ExchangeRate
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = 'Очистка старых неактивных курсов валют'

    def add_arguments(self, parser):
        parser.add_argument(
            '--days',
            type=int,
            default=7,
            help='Количество дней, за которые сохранять историю'
        )

    def handle(self, *args, **options):
        days = options['days']
        cutoff_date = datetime.now() - timedelta(days=days)
        
        # Удаляем старые неактивные курсы
        deleted_count = ExchangeRate.objects.filter(
            is_active=False,
            last_updated__lt=cutoff_date
        ).delete()[0]
        
        self.stdout.write(
            self.style.SUCCESS(f'Успешно удалено {deleted_count} старых курсов')
        )