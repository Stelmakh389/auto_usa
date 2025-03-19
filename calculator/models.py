from django.db import models
from django.core.validators import MinValueValidator


class Port(models.Model):
    name = models.CharField('Название', max_length=100, unique=True)

    class Meta:
        verbose_name = 'Порт'
        verbose_name_plural = 'Порты'

    def __str__(self):
        return self.name


class Auction(models.Model):
    AUCTION_TYPES = [
        ('copart', 'Copart'),
        ('sublot_copart', 'Sublot Copart'),
        ('iaa', 'IAA'),
        ('sublot_iaa', 'Sublot IAA'),
        ('manheim', 'Manheim'),
    ]

    name = models.CharField('Название', max_length=100, unique=True)
    auction_type = models.CharField('Тип аукциона', max_length=20, choices=AUCTION_TYPES)
    is_active = models.BooleanField('Активный', default=True)

    class Meta:
        verbose_name = 'Аукцион'
        verbose_name_plural = 'Аукционы'

    def __str__(self):
        return f"{self.get_auction_type_display()} - {self.name}"

class Location(models.Model):
    auction = models.ForeignKey(
        Auction,
        on_delete=models.CASCADE,
        related_name='locations',
        verbose_name='Аукцион'
    )
    name = models.CharField('Название', max_length=200)
    delivery_cost = models.DecimalField(
        'Стоимость доставки',
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)]
    )
    port = models.ForeignKey(
        Port,
        on_delete=models.PROTECT,
        verbose_name='Порт'
    )
    is_active = models.BooleanField('Активная', default=True)

    class Meta:
        verbose_name = 'Локация'
        verbose_name_plural = 'Локации'
        unique_together = ['auction', 'name']
        ordering = ['name']  # Сортировка по имени

    def __str__(self):
        return f"{self.name} ({self.auction.name})"

