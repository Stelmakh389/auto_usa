# Generated by Django 5.0.1 on 2024-02-01 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_site', '0002_europecard_koreacard_usacard_delete_card'),
    ]

    operations = [
        migrations.AddField(
            model_name='advuser',
            name='phone_number',
            field=models.CharField(blank=True, max_length=20, verbose_name='Номер телефона'),
        ),
    ]
