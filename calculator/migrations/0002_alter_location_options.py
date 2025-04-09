from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('calculator', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='location',
            options={'ordering': ['name'], 'verbose_name': 'Локация', 'verbose_name_plural': 'Локации'},
        ),
    ] 