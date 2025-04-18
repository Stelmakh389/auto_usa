# Generated by Django 5.0.1 on 2025-03-23 07:01

import car_site.models
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_site', '0030_alter_koreapaymentfile_card_alter_koreaphoto_card_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usaphoto',
            options={'verbose_name': 'Фото со склада США', 'verbose_name_plural': 'Фото со склада США'},
        ),
        migrations.RemoveField(
            model_name='auctiondata',
            name='lot_link',
        ),
        migrations.RemoveField(
            model_name='europebelarusphoto',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='europecard',
            name='price_brutto',
        ),
        migrations.RemoveField(
            model_name='europecard',
            name='price_netto',
        ),
        migrations.RemoveField(
            model_name='europephoto',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='koreacard',
            name='price',
        ),
        migrations.RemoveField(
            model_name='koreaphoto',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='koreatkphoto',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='usacard',
            name='price',
        ),
        migrations.RemoveField(
            model_name='usaphoto',
            name='comment',
        ),
        migrations.AddField(
            model_name='auctiondata',
            name='container_link',
            field=models.CharField(blank=True, max_length=100, verbose_name='Ссылка на контейнер'),
        ),
        migrations.AddField(
            model_name='europayment',
            name='price_brutto',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена Брутто (в евро)'),
        ),
        migrations.AddField(
            model_name='europayment',
            name='price_netto',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена Нетто (в евро)'),
        ),
        migrations.AddField(
            model_name='usacard',
            name='title',
            field=models.BooleanField(default=False, verbose_name='Документы на машину'),
        ),
        migrations.AlterField(
            model_name='auctiondata',
            name='pay_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата покупки'),
        ),
        migrations.AlterField(
            model_name='europecard',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания'),
        ),
        migrations.AlterField(
            model_name='europetracking',
            name='belarus_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата доставки в Беларусь'),
        ),
        migrations.AlterField(
            model_name='europetracking',
            name='money_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата поступления денег'),
        ),
        migrations.AlterField(
            model_name='europetracking',
            name='moscow_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата доставки до Москвы'),
        ),
        migrations.AlterField(
            model_name='europetracking',
            name='payment_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AlterField(
            model_name='europlatform',
            name='purchase_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата покупки'),
        ),
        migrations.AlterField(
            model_name='koreacard',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания'),
        ),
        migrations.AlterField(
            model_name='koreacard',
            name='final_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата прибытия в конечный пункт'),
        ),
        migrations.AlterField(
            model_name='koreacard',
            name='pay_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата покупки'),
        ),
        migrations.AlterField(
            model_name='koreacard',
            name='payment_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AlterField(
            model_name='koreacard',
            name='vladivostok_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата прибытия во Владивосток'),
        ),
        migrations.AlterField(
            model_name='usacard',
            name='cnt_auto',
            field=models.CharField(blank=True, choices=[('1 авто', '1 авто'), ('2 и более', '2 и более')], max_length=10, null=True, verbose_name='Кол-во авто, купленных за год'),
        ),
        migrations.AlterField(
            model_name='usacard',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания'),
        ),
        migrations.AlterField(
            model_name='usapayment',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена авто'),
        ),
        migrations.AlterField(
            model_name='usatracking',
            name='arrival_date_litva',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата прибытия в Литву'),
        ),
        migrations.AlterField(
            model_name='usatracking',
            name='belarus_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата доставки в Беларусь'),
        ),
        migrations.AlterField(
            model_name='usatracking',
            name='container_load_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата загрузки в контейнер'),
        ),
        migrations.AlterField(
            model_name='usatracking',
            name='delivery_storage_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата доставки на склад'),
        ),
        migrations.AlterField(
            model_name='usatracking',
            name='moscow_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата доставки в Москву'),
        ),
        migrations.AlterField(
            model_name='usatracking',
            name='open_container_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Дата открытия контейнера'),
        ),
        migrations.CreateModel(
            name='UsaBelarusPhoto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to=car_site.models.get_timestamp_path, verbose_name='Фото')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='belarus_photos', to='car_site.usacard', verbose_name='Карточка США')),
            ],
            options={
                'verbose_name': 'Фото из Беларуси',
                'verbose_name_plural': 'Фото из Беларуси',
            },
        ),
        migrations.CreateModel(
            name='UsaMoscowPhoto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to=car_site.models.get_timestamp_path, verbose_name='Фото')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='moscow_photos', to='car_site.usacard', verbose_name='Карточка США')),
            ],
            options={
                'verbose_name': 'Фото из Москвы',
                'verbose_name_plural': 'Фото из Москвы',
            },
        ),
        migrations.CreateModel(
            name='UsaOpenPhoto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to=car_site.models.get_timestamp_path, verbose_name='Фото')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='open_photos', to='car_site.usacard', verbose_name='Карточка США')),
            ],
            options={
                'verbose_name': 'Фото открытия контейнера в Литве',
                'verbose_name_plural': 'Фото открытия контейнера в Литве',
            },
        ),
        migrations.CreateModel(
            name='UsaTakenPhoto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to=car_site.models.get_timestamp_path, verbose_name='Фото')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='taken_photos', to='car_site.usacard', verbose_name='Карточка США')),
            ],
            options={
                'verbose_name': 'Фото при заборе перевозчиком из Литвы',
                'verbose_name_plural': 'Фото при заборе перевозчиком из Литвы',
            },
        ),
    ]
