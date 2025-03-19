# Generated by Django 5.0.1 on 2024-02-05 21:45

import car_site.models
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_site', '0023_alter_europayment_card_alter_europetracking_card_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='europayment',
            name='tax_rate',
        ),
        migrations.RemoveField(
            model_name='europayment',
            name='tax_sum',
        ),
        migrations.CreateModel(
            name='EuropeCustomDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to=car_site.models.get_file_path, verbose_name='Файл')),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='euro_documents', to='car_site.europecard', verbose_name='Таможенный документ')),
            ],
            options={
                'verbose_name': 'Таможенный документ',
                'verbose_name_plural': 'Таможенные документы',
            },
        ),
    ]
