# Generated by Django 5.0.1 on 2024-01-31 22:17

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_site', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='EuropeCard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.CharField(max_length=200, verbose_name='Марка и модель')),
                ('vin_number', models.CharField(max_length=50, verbose_name='VIN номер')),
                ('purchase_date', models.DateField(verbose_name='Дата покупки')),
                ('payment_date', models.DateField(verbose_name='Дата оплаты')),
                ('country', models.CharField(choices=[('Германия', 'Германия'), ('Голландия', 'Голландия'), ('Польша', 'Польша'), ('Литва', 'Литва'), ('Швейцария', 'Швейцария'), ('Италия', 'Италия'), ('Австрия', 'Австрия'), ('Чехия', 'Чехия'), ('Латвия', 'Латвия'), ('Эстония', 'Эстония')], max_length=50, verbose_name='Страна покупки')),
                ('date_receipt_money', models.DateField(verbose_name='Дата поступления денег')),
                ('delivery_date_belarus', models.DateField(verbose_name='Дата доставки в Беларусь')),
                ('arrival_date_moscow', models.DateField(verbose_name='Дата  доставки до Москвы')),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Карточка Европы',
                'verbose_name_plural': 'Карточки Европы',
            },
        ),
        migrations.CreateModel(
            name='KoreaCard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.CharField(max_length=200, verbose_name='Марка и модель')),
                ('vin_number', models.CharField(max_length=50, verbose_name='VIN номер')),
                ('purchase_date', models.DateField(verbose_name='Дата покупки')),
                ('payment_date', models.DateField(verbose_name='Дата оплаты')),
                ('delivery_date', models.DateField(verbose_name='Дата прибытия в конечный пункт')),
                ('arrival_date_vladivostok', models.DateField(verbose_name='Дата прибытия во Владивосток')),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Карточка Южной Кореи',
                'verbose_name_plural': 'Карточки Южной Кореи',
            },
        ),
        migrations.CreateModel(
            name='UsaCard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.CharField(max_length=200, verbose_name='Марка и модель')),
                ('vin_number', models.CharField(max_length=50, verbose_name='VIN номер')),
                ('auction', models.CharField(max_length=200, verbose_name='Аукцион')),
                ('lot_number', models.CharField(max_length=100, verbose_name='Номер лота')),
                ('pay_date', models.DateField(verbose_name='Дата покупки')),
                ('delivery_storage_date', models.DateField(verbose_name='Дата доставки на склад')),
                ('container_load_date', models.DateField(verbose_name='Дата загрузки в контейнер')),
                ('port', models.CharField(choices=[('Нью-Джерси', 'Нью-Джерси'), ('Джорджия', 'Джорджия'), ('Флорида', 'Флорида'), ('Техас', 'Техас'), ('Калифорния', 'Калифорния')], max_length=50, verbose_name='Порт отправки')),
                ('arrival_date_litva', models.DateField(verbose_name='Дата прибытия в Литву')),
                ('open_container_date', models.DateField(verbose_name='Дата открытия контейнера')),
                ('container_number', models.CharField(max_length=500, verbose_name='Номер контейнера')),
                ('car_sum', models.IntegerField(verbose_name='Стоимость')),
                ('payment_flag', models.BooleanField(verbose_name='Оплата на аукцион')),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Карточка США',
                'verbose_name_plural': 'Карточки США',
            },
        ),
        migrations.DeleteModel(
            name='Card',
        ),
    ]
