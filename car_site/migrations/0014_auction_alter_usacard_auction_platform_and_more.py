# Generated by Django 5.0.1 on 2024-02-03 23:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_site', '0013_usaextralink_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Auction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Аукцион')),
            ],
        ),
        migrations.AlterField(
            model_name='usacard',
            name='auction',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.auction', verbose_name='Аукцион'),
        ),
        migrations.CreateModel(
            name='Platform',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Площадка')),
                ('auction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.auction', verbose_name='Аукцион')),
            ],
        ),
        migrations.CreateModel(
            name='AllowedCombination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('auction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.auction', verbose_name='Аукцион')),
                ('platform', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.platform', verbose_name='Площадка')),
            ],
            options={
                'ordering': ['pk'],
            },
        ),
        migrations.AddField(
            model_name='usacard',
            name='platform',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='car_site.platform', verbose_name='Площадка'),
            preserve_default=False,
        ),
    ]
