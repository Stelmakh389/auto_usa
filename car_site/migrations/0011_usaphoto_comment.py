# Generated by Django 5.0.1 on 2024-02-03 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_site', '0010_advuser_balance'),
    ]

    operations = [
        migrations.AddField(
            model_name='usaphoto',
            name='comment',
            field=models.CharField(blank=True, max_length=200, verbose_name='Комментарий'),
        ),
    ]
