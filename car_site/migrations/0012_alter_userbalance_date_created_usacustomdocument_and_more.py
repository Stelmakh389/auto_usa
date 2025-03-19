# Generated by Django 5.0.1 on 2024-02-03 18:15

import car_site.models
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_site', '0011_usaphoto_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userbalance',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания'),
        ),
        migrations.CreateModel(
            name='UsaCustomDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to=car_site.models.get_file_path, verbose_name='Файл')),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.usacard', verbose_name='Таможенный документ')),
            ],
            options={
                'verbose_name': 'Таможенный документ',
                'verbose_name_plural': 'Таможенные документы',
            },
        ),
        migrations.CreateModel(
            name='UsaExtraLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=1000, verbose_name='Ссылка')),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания')),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.usacard', verbose_name='Карточка США')),
            ],
            options={
                'verbose_name': 'Дополнительный ссылки',
                'verbose_name_plural': 'Дополнительные ссылки',
            },
        ),
    ]
