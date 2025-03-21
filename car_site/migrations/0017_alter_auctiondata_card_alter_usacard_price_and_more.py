# Generated by Django 5.0.1 on 2024-02-04 11:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_site', '0016_rename_allowedcombination_usaallowedcombination_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='auctiondata',
            name='card',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.usacard', unique=True, verbose_name='Карточка'),
        ),
        migrations.AlterField(
            model_name='usacard',
            name='price',
            field=models.PositiveIntegerField(default=0, verbose_name='Цена'),
        ),
        migrations.AlterField(
            model_name='usapayment',
            name='card',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.usacard', unique=True, verbose_name='Карточка США'),
        ),
        migrations.AlterField(
            model_name='usatracking',
            name='card',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.usacard', unique=True, verbose_name='Карточка США'),
        ),
    ]
