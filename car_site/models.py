from datetime import datetime

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

from .utils.extensions import PORT_USA_CHOICES, COUNTRY_CHOICES, CAR_CHOICES, ENGINE_CHOICES, CAPACITY_CHOICES, \
    AGE_CHOICES, CNT_AUTO_CHOICES, QUADRUPOLE_CHOICES, MOTO_CHOICES, MASS_CHOICES, EURO_CAR_CHOICES, EURO_ENGINE_CHOICES


def get_timestamp_path(instance, filename):
    return f'photo/{datetime.now().timestamp()}_{filename}'


def get_file_path(instance, filename):
    return f'files/{datetime.now().timestamp()}_{filename}'


def get_file_type(file):
    name = file.name.lower()
    if name.endswith('.pdf'):
        return 'pdf'
    if name.endswith(('.jpg', '.jpeg', '.png', '.svg')):
        return 'photo'


class UsaAuction(models.Model):
    name = models.CharField(max_length=200, verbose_name='Аукцион')

    def __str__(self):
        return self.name


class UsaPlatform(models.Model):
    auction = models.ForeignKey(UsaAuction, on_delete=models.CASCADE, verbose_name='Аукцион')
    name = models.CharField(max_length=200, verbose_name='Площадка')

    def __str__(self):
        return self.name


class AuctionData(models.Model):
    card = models.OneToOneField("UsaCard", on_delete=models.CASCADE, verbose_name='Карточка',
                                related_name='auction_data')

    lot_number = models.CharField(max_length=100, blank=True, verbose_name='Номер лота')
    user_name = models.CharField(max_length=100, blank=True, verbose_name='Название учетки')

    pay_date = models.DateField(verbose_name='Дата покупки', null=True, blank=True, default=None)
    container_number = models.CharField(max_length=100, blank=True, verbose_name='Номер контейнера')
    container_link = models.CharField(max_length=100, blank=True, verbose_name='Ссылка на контейнер')

    auction = models.ForeignKey(UsaAuction, on_delete=models.CASCADE, verbose_name='Аукцион', related_name='auctions')
    platform = models.ForeignKey("UsaPlatform", on_delete=models.CASCADE, verbose_name='Площадка',
                                 related_name='platforms')

    def __str__(self):
        return f'{self.auction} - {self.platform}'

    class Meta:
        verbose_name_plural = 'Данные аукциона'
        verbose_name = 'Данные аукциона'


class UsaAllowedCombination(models.Model):
    auction = models.ForeignKey(UsaAuction, on_delete=models.CASCADE, verbose_name='Аукцион')
    platform = models.ForeignKey(UsaPlatform, on_delete=models.CASCADE, verbose_name='Площадка')

    def __str__(self):
        return f'{self.auction} - {self.platform}'

    class Meta:
        ordering = ['pk']


class UsaCard(models.Model):
    user = models.ForeignKey("AdvUser", on_delete=models.CASCADE, null=True, verbose_name='Пользователь')

    model = models.CharField(max_length=200, verbose_name='Марка и модель')
    vin_number = models.CharField(max_length=50, verbose_name='VIN номер')
    vehicle_type = models.CharField(max_length=100, null=True, choices=CAR_CHOICES, verbose_name='Тип ТС')
    engine_type = models.CharField(max_length=200, null=True, choices=ENGINE_CHOICES, verbose_name='Тип двигателя')
    capacity = models.CharField(max_length=100, null=True, choices=CAPACITY_CHOICES, verbose_name='Объем')
    age = models.CharField(max_length=100, null=True, choices=AGE_CHOICES, verbose_name='Возраст')
    title = models.BooleanField(verbose_name='Документы на машину', default=False)
    pending = models.BooleanField(verbose_name='Pending', default=False)
    total = models.BooleanField(verbose_name='Total', default=False)
    cnt_auto = models.CharField(max_length=10, null=True, blank=True, choices=CNT_AUTO_CHOICES,
                                verbose_name='Кол-во авто, купленных за год')
    quadrupole = models.CharField(max_length=100, choices=QUADRUPOLE_CHOICES, null=True, blank=True,
                                  verbose_name='Объем двигателя (Снегоход или Квадроцикл)')
    motor_power = models.CharField(max_length=100, choices=MOTO_CHOICES, blank=True,
                                   verbose_name='Объем двигателя (Мотоцикл)')
    massa = models.CharField(max_length=100, choices=MASS_CHOICES, blank=True, verbose_name='Масса техники (Пикап)')

    power = models.PositiveIntegerField(blank=True, verbose_name='Кол-во л. сил (Мотоцикл)', default=0)

    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.vin_number

    class Meta:
        verbose_name_plural = 'Карточки США'
        verbose_name = 'Карточка США'


class UsaPayment(models.Model):
    card = models.OneToOneField("UsaCard", on_delete=models.CASCADE, verbose_name='Карточка США',
                                related_name='payment')
    price = models.PositiveIntegerField(verbose_name='Цена авто', default=0)
    auction_price = models.PositiveIntegerField(verbose_name='Аукционный сбор', default=0)
    commission = models.PositiveIntegerField(verbose_name='Комиссия за перевод денег в США + % СВИФТ', default=0)
    car_auct_price = models.PositiveIntegerField(verbose_name='Итого цена авто + аукционный сбор + комиссия', default=0)
    payment_flag = models.BooleanField(verbose_name='Оплата на аукцион', default=False)

    port = models.CharField(
        max_length=50,
        null=True,
        choices=PORT_USA_CHOICES,
        verbose_name='Порт отправки',
    )

    port_price = models.PositiveIntegerField(verbose_name='Доставка до порта', default=0)
    moscow_price = models.PositiveIntegerField(verbose_name='Доставка до Москвы', default=0)
    expenses_litva = models.PositiveIntegerField(verbose_name='Расходы в Литве', default=0)
    delivery_price = models.PositiveIntegerField(verbose_name='Итого оплата доставки', default=0)
    delivery_payment_flag = models.BooleanField(verbose_name='Оплата доставки', default=False)

    extra_price = models.PositiveIntegerField(verbose_name='Иные платежи', default=0)
    comment = models.CharField(blank=True, verbose_name='Комментарий', max_length=400)
    tax_price = models.PositiveIntegerField(verbose_name='Таможенная пошлина', default=0)
    tax_payment_flag = models.BooleanField(verbose_name='Оплата таможенной пошлины', default=False)
    tax = models.PositiveIntegerField(verbose_name='Услуги Декларанта / таможни / СВХ', default=0)
    tax_util = models.PositiveIntegerField(verbose_name='Утиль. сбор', default=0)
    tax_rate = models.IntegerField(verbose_name='Установленная ставка на льготника', default=0)
    tax_sum = models.PositiveIntegerField(verbose_name='Итого ставка + пошлина', default=0)
    tax_service = models.PositiveIntegerField(verbose_name='Наши услуги', default=0)
    sbkts_epts = models.PositiveIntegerField(verbose_name='СБКТС + ЭПТС', default=0)
    epsms_moto = models.PositiveIntegerField(verbose_name='ЭПСМС (Мото)', default=0)
    excise = models.PositiveIntegerField(verbose_name='Акциз (Мото)', default=0)
    penalty = models.PositiveIntegerField(verbose_name='Штрафы аукциона', default=0)

    def __str__(self):
        return f"Платежи {self.card.__str__()}"

    class Meta:
        verbose_name_plural = 'Платежи'
        verbose_name = 'Платежи'


class UsaTracking(models.Model):
    card = models.OneToOneField("UsaCard", on_delete=models.CASCADE, verbose_name='Карточка США',
                                related_name='tracking')

    delivery_storage_date = models.DateField(verbose_name='Дата доставки на склад', default=None, null=True, blank=True)
    container_load_date = models.DateField(verbose_name='Дата загрузки в контейнер', default=None, null=True, blank=True)

    arrival_date_litva = models.DateField(verbose_name='Дата прибытия в Литву', default=None, null=True, blank=True)
    open_container_date = models.DateField(verbose_name='Дата открытия контейнера', default=None, null=True, blank=True)
    belarus_date = models.DateField(verbose_name='Дата доставки в Беларусь', default=None, null=True, blank=True)
    moscow_date = models.DateField(verbose_name='Дата доставки в Москву', default=None, null=True, blank=True)

    def __str__(self):
        return f"Отслеживание {self.card.__str__()}"

    class Meta:
        verbose_name_plural = 'Отслеживание'
        verbose_name = 'Отслеживание'


class UsaPhoto(models.Model):
    card = models.ForeignKey(UsaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка США', related_name='photos')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    class Meta:
        verbose_name_plural = 'Фото со склада США'
        verbose_name = 'Фото со склада США'


class UsaOpenPhoto(models.Model):
    card = models.ForeignKey(UsaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка США', related_name='open_photos')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    class Meta:
        verbose_name_plural = 'Фото открытия контейнера в Литве'
        verbose_name = 'Фото открытия контейнера в Литве'


class UsaTakenPhoto(models.Model):
    card = models.ForeignKey(UsaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка США', related_name='taken_photos')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    class Meta:
        verbose_name_plural = 'Фото при заборе перевозчиком из Литвы'
        verbose_name = 'Фото при заборе перевозчиком из Литвы'


class UsaBelarusPhoto(models.Model):
    card = models.ForeignKey(UsaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка США', related_name='belarus_photos')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    class Meta:
        verbose_name_plural = 'Фото из Беларуси'
        verbose_name = 'Фото из Беларуси'


class UsaMoscowPhoto(models.Model):
    card = models.ForeignKey(UsaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка США', related_name='moscow_photos')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    class Meta:
        verbose_name_plural = 'Фото из Москвы'
        verbose_name = 'Фото из Москвы'


class UsaPaymentFile(models.Model):
    card = models.ForeignKey(UsaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка США', related_name='payment_files')
    file = models.FileField(upload_to=get_file_path, verbose_name='Файл')
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.file.name

    def file_type(self):
        return get_file_type(self.file)

    class Meta:
        verbose_name_plural = 'Файлы оплаты'
        verbose_name = 'Файл оплаты'


class UsaCustomDocument(models.Model):
    card = models.ForeignKey(UsaCard, on_delete=models.CASCADE, verbose_name='Таможенный документ',
                             related_name='documents')
    file = models.FileField(upload_to=get_file_path, verbose_name='Файл')
    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.file.name

    def file_type(self):
        return get_file_type(self.file)

    class Meta:
        verbose_name_plural = 'Таможенные документы'
        verbose_name = 'Таможенный документ'


class UsaExtraLink(models.Model):
    card = models.ForeignKey(UsaCard, on_delete=models.CASCADE, verbose_name='Карточка США', related_name='links')
    url = models.CharField(max_length=1000, verbose_name='Ссылка')
    name = models.CharField(max_length=300, verbose_name='Название', default='Ссылка')
    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Дополнительные ссылки'
        verbose_name = 'Дополнительный ссылки'


class EuropeCard(models.Model):
    user = models.ForeignKey("AdvUser", on_delete=models.CASCADE, null=True, verbose_name='Пользователь')

    model = models.CharField(max_length=200, verbose_name='Марка и модель')
    vin_number = models.CharField(max_length=50, verbose_name='VIN номер')

    vehicle_type = models.CharField(max_length=100, null=True, choices=EURO_CAR_CHOICES, verbose_name='Тип ТС')
    engine_type = models.CharField(max_length=200, null=True, choices=EURO_ENGINE_CHOICES, verbose_name='Тип двигателя')
    capacity = models.CharField(max_length=100, null=True, choices=CAPACITY_CHOICES, verbose_name='Объем')
    age = models.CharField(max_length=100, null=True, choices=AGE_CHOICES, verbose_name='Возраст')
    cnt_auto = models.CharField(max_length=10, null=True, choices=CNT_AUTO_CHOICES,
                                verbose_name='Кол-во авто, купленных за год')
    quadrupole = models.CharField(max_length=100, choices=QUADRUPOLE_CHOICES, null=True, blank=True,
                                  verbose_name='Объем двигателя (Снегоход или Квадроцикл)')
    motor_power = models.CharField(max_length=100, choices=MOTO_CHOICES, blank=True,
                                   verbose_name='Объем двигателя (Мотоцикл)')
    massa = models.CharField(max_length=100, choices=MASS_CHOICES, blank=True, verbose_name='Масса техники (Пикап)')

    power = models.PositiveIntegerField(blank=True, verbose_name='Кол-во л. сил (Мотоцикл)', default=0)

    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.vin_number

    class Meta:
        verbose_name_plural = 'Карточки Европы'
        verbose_name = 'Карточка Европы'


class EuropeTracking(models.Model):
    card = models.OneToOneField(EuropeCard, on_delete=models.CASCADE, verbose_name='Карточка Европы',
                                related_name='tracking')

    payment_date = models.DateField(verbose_name='Дата оплаты', default=None, null=True, blank=True)
    money_date = models.DateField(verbose_name='Дата поступления денег', default=None, null=True, blank=True)
    belarus_date = models.DateField(verbose_name='Дата доставки в Беларусь', default=None, null=True, blank=True)
    moscow_date = models.DateField(verbose_name='Дата доставки до Москвы', default=None, null=True, blank=True)

    def __str__(self):
        return self.card.__str__()

    class Meta:
        verbose_name_plural = 'Отслеживание'
        verbose_name = 'Отслеживание'


class EuroPlatform(models.Model):
    card = models.OneToOneField(EuropeCard, on_delete=models.CASCADE, verbose_name='Карточка Европы',
                                related_name='platforms')

    country = models.CharField(
        max_length=50,
        choices=COUNTRY_CHOICES,
        verbose_name='Страна покупки',
    )

    purchase_date = models.DateField(verbose_name='Дата покупки', default=None, null=True, blank=True)

    def __str__(self):
        return self.card.__str__()

    class Meta:
        verbose_name_plural = 'Площадки'
        verbose_name = 'Площадка'


class EuroPayment(models.Model):
    card = models.OneToOneField(EuropeCard, on_delete=models.CASCADE, verbose_name='Карточка Европы',
                                related_name='payments')

    price_brutto = models.PositiveIntegerField(verbose_name='Цена Брутто (в евро)', default=0)
    price_netto = models.PositiveIntegerField(verbose_name='Цена Нетто (в евро)', default=0)
    price = models.PositiveIntegerField(verbose_name='Комиссия за сопровождение сделки (в евро)', default=0)
    auction_price = models.PositiveIntegerField(verbose_name='Итого авто +комиссия  (в евро)', default=0)
    payment_flag = models.BooleanField(verbose_name='Оплата авто +комиссия', default=False)
    inspection = models.PositiveIntegerField(verbose_name='Осмотр авто (в евро)', default=0)
    expenses = models.PositiveIntegerField(verbose_name='Расходы по оплате в Европу (в евро)', default=0)
    moscow_delivery_price = models.PositiveIntegerField(verbose_name='Доставка до Москвы (в евро)', default=0)
    tax_price = models.PositiveIntegerField(verbose_name='Таможенная пошлина', default=0)
    tax_flag = models.BooleanField(verbose_name='Оплата таможни', default=False)
    tax = models.IntegerField(verbose_name='Установленная ставка', default=0)
    tax_payment = models.PositiveIntegerField(verbose_name='Итого таможня + ставка (в долларах) ', default=0)
    tax_payment_flag = models.BooleanField(verbose_name='Оплачено таможня + ставка ', default=False)
    tax_service = models.PositiveIntegerField(verbose_name='Услуги декларанта / Таможни / СВХ ( в рублях)', default=0)

    tax_util = models.PositiveIntegerField(verbose_name='Утиль. сбор  в рублях', default=0)
    our_service = models.PositiveIntegerField(verbose_name='Наши услуги в рублях', default=0)
    sbkts_epts = models.PositiveIntegerField(verbose_name='СБКТС + ЭПТС в рублях', default=0)
    epsms = models.PositiveIntegerField(verbose_name='ЭПСМС (Квадроциклы или Снегоходы)', default=0)
    excise = models.PositiveIntegerField(verbose_name='Акциз (Мото)', default=0)

    def __str__(self):
        return self.card.__str__()

    class Meta:
        verbose_name_plural = 'Платежи'
        verbose_name = 'Платежи'


class EuropePhoto(models.Model):
    card = models.ForeignKey(EuropeCard, on_delete=models.CASCADE,
                             verbose_name='Карточка Европы', related_name='photos')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    def file_type(self):
        return get_file_type(self.photo)

    class Meta:
        verbose_name_plural = 'Фото осмотра'
        verbose_name = 'Фото осмотра'


class EuropeBelarusPhoto(models.Model):
    card = models.ForeignKey(EuropeCard, on_delete=models.CASCADE,
                             verbose_name='Карточка Европы', related_name='belarus_photos')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    def file_type(self):
        return get_file_type(self.photo)

    class Meta:
        verbose_name_plural = 'Фото из Беларуси'
        verbose_name = 'Фото из Беларуси'


class EuropePaymentFile(models.Model):
    card = models.ForeignKey(EuropeCard, on_delete=models.CASCADE,
                             verbose_name='Карточка Европы', related_name='files')
    file = models.FileField(upload_to=get_file_path, verbose_name='Файл')
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.file.name

    def file_type(self):
        return get_file_type(self.file)

    class Meta:
        verbose_name_plural = 'Файлы оплаты'
        verbose_name = 'Файл оплаты'


class EuropeCustomDocument(models.Model):
    card = models.ForeignKey(EuropeCard, on_delete=models.CASCADE, verbose_name='Таможенный документ',
                             related_name='euro_documents')
    file = models.FileField(upload_to=get_file_path, verbose_name='Файл')
    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.file.name

    def file_type(self):
        return get_file_type(self.file)

    class Meta:
        verbose_name_plural = 'Таможенные документы'
        verbose_name = 'Таможенный документ'


class EuropeExtraLink(models.Model):
    card = models.ForeignKey(EuropeCard, on_delete=models.CASCADE, verbose_name='Карточка Европы',
                             related_name='euro_links')

    url = models.CharField(max_length=1000, verbose_name='Ссылка')
    name = models.CharField(max_length=300, verbose_name='Название', default='Ссылка')
    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Дополнительные ссылки'
        verbose_name = 'Дополнительный ссылки'


class KoreaCard(models.Model):
    user = models.ForeignKey("AdvUser", on_delete=models.CASCADE, null=True, verbose_name='Пользователь')

    model = models.CharField(max_length=200, verbose_name='Марка и модель')
    vin_number = models.CharField(max_length=50, verbose_name='VIN номер')

    vehicle_type = models.CharField(max_length=100, null=True, choices=EURO_CAR_CHOICES, verbose_name='Тип ТС')
    engine_type = models.CharField(max_length=200, null=True, choices=EURO_ENGINE_CHOICES, verbose_name='Тип двигателя')
    capacity = models.CharField(max_length=100, null=True, choices=CAPACITY_CHOICES, verbose_name='Объем')
    age = models.CharField(max_length=100, null=True, choices=AGE_CHOICES, verbose_name='Возраст')
    cnt_auto = models.CharField(max_length=10, null=True, choices=CNT_AUTO_CHOICES,
                                verbose_name='Кол-во авто, купленных за год')
    quadrupole = models.CharField(max_length=100, choices=QUADRUPOLE_CHOICES, null=True, blank=True,
                                  verbose_name='Объем двигателя (Снегоход или Квадроцикл)')
    motor_power = models.CharField(max_length=100, choices=MOTO_CHOICES, blank=True,
                                   verbose_name='Объем двигателя (Мотоцикл)')
    massa = models.CharField(max_length=100, choices=MASS_CHOICES, blank=True, verbose_name='Масса техники (Пикап)')

    power = models.PositiveIntegerField(blank=True, verbose_name='Кол-во л. сил (Мотоцикл)', default=0)

    pay_date = models.DateField(verbose_name='Дата покупки', default=None, null=True, blank=True)
    payment_date = models.DateField(verbose_name='Дата оплаты', default=None, null=True, blank=True)
    vladivostok_date = models.DateField(verbose_name='Дата прибытия во Владивосток', default=None, null=True, blank=True)
    final_date = models.DateField(verbose_name='Дата прибытия в конечный пункт', default=None, null=True, blank=True)

    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.vin_number

    class Meta:
        verbose_name_plural = 'Карточки Южной Кореи'
        verbose_name = 'Карточка Южной Кореи'


class KoreaPayment(models.Model):
    card = models.OneToOneField(KoreaCard, on_delete=models.CASCADE, verbose_name='Карточка Европы',
                                related_name='korea_payment')

    car_price = models.PositiveIntegerField(verbose_name='Стоимость авто (в долларах)', default=0)
    export = models.PositiveIntegerField(verbose_name='Экспортные документы и доставка до ВДК (в долларах)', default=0)
    total_price = models.PositiveIntegerField(verbose_name='Итого авто + экспортные документы (в долларах)', default=0)
    payment_flag = models.BooleanField(verbose_name='Оплата авто + экспортные документы', default=False)

    delivery_price = models.PositiveIntegerField(verbose_name='Доставка из ВДК до конечного пункта в рублях', default=0)
    tax_price = models.PositiveIntegerField(verbose_name='Таможенная пошлина (в долларах)', default=0)
    tax_flag = models.BooleanField(verbose_name='Оплата таможни', default=False)

    tax = models.IntegerField(verbose_name='Установленная ставка (в долларах)', default=0)
    tax_payment = models.PositiveIntegerField(verbose_name='Итого таможня + ставка (в долларах) ', default=False)
    tax_payment_flag = models.BooleanField(verbose_name='Оплачено таможня + ставка ', default=False)

    tax_service = models.PositiveIntegerField(verbose_name='Услуги декларанта / Таможни / СВХ ( в рублях)', default=0)
    tax_util = models.PositiveIntegerField(verbose_name='Утиль. сбор  в рублях', default=0)
    our_service = models.PositiveIntegerField(verbose_name='Наши услуги в рублях', default=0)
    sbkts_epts = models.PositiveIntegerField(verbose_name='СБКТС + ЭПТС в рублях', default=0)
    epsms = models.PositiveIntegerField(verbose_name='ЭПСМС (Квадроциклы или Снегоходы)', default=0)
    excise = models.PositiveIntegerField(verbose_name='Акциз (Мото)', default=0)

    def __str__(self):
        return self.card.__str__()

    class Meta:
        verbose_name_plural = 'Платежи'
        verbose_name = 'Платежи'


class KoreaPhoto(models.Model):
    card = models.ForeignKey(KoreaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка Южной Кореи', related_name='korea_photo')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    def file_type(self):
        return get_file_type(self.photo)

    class Meta:
        verbose_name_plural = 'Фотографии c Владивостока'
        verbose_name = 'Фотография c Владивостока'


class KoreaTKPhoto(models.Model):
    card = models.ForeignKey(KoreaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка Южной Кореи', related_name='korea_tk_photo')
    photo = models.ImageField(upload_to=get_timestamp_path, verbose_name='Фото')

    def __str__(self):
        return self.photo.name

    def file_type(self):
        return get_file_type(self.photo)

    class Meta:
        verbose_name_plural = 'Фотографии с доставки в ТК'
        verbose_name = 'Фотография c доставки в ТК'


class KoreaPaymentFile(models.Model):
    card = models.ForeignKey(KoreaCard, on_delete=models.CASCADE,
                             verbose_name='Карточка Южной Кореи', related_name='korea_files')
    file = models.FileField(upload_to=get_file_path, verbose_name='Файл')
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.file.name

    def file_type(self):
        return get_file_type(self.file)

    class Meta:
        verbose_name_plural = 'Файлы оплаты'
        verbose_name = 'Файл оплаты'


class KoreaCustomDocument(models.Model):
    card = models.ForeignKey(KoreaCard, on_delete=models.CASCADE, verbose_name='Таможенный документ',
                             related_name='korea_documents')
    file = models.FileField(upload_to=get_file_path, verbose_name='Файл')
    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.file.name

    def file_type(self):
        return get_file_type(self.file)

    class Meta:
        verbose_name_plural = 'Таможенные документы'
        verbose_name = 'Таможенный документ'


class KoreaExtraLink(models.Model):
    card = models.ForeignKey(KoreaCard, on_delete=models.CASCADE, verbose_name='Карточка Европы',
                             related_name='korea_links')

    url = models.CharField(max_length=1000, verbose_name='Ссылка')
    name = models.CharField(max_length=300, verbose_name='Название', default='Ссылка')
    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Дополнительные ссылки'
        verbose_name = 'Дополнительный ссылки'


class AdvUser(AbstractUser):
    phone_number = models.CharField(max_length=20, verbose_name='Номер телефона', blank=True)
    balance = models.IntegerField(default=0, verbose_name='Баланс')
    is_manager = models.BooleanField(default=False,
                                     verbose_name='Является менеджером?')

    def __str__(self):
        return f'{self.username}: {self.first_name} {self.last_name}'

    class Meta(AbstractUser.Meta):
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class UserBalance(models.Model):
    user = models.ForeignKey(AdvUser, on_delete=models.CASCADE, null=True, verbose_name='Пользователь')
    amount = models.IntegerField(verbose_name='Баланс')
    description = models.CharField(max_length=1000, verbose_name='Комментарий')
    date_created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')

    def __str__(self):
        return f'{self.user} {self.amount}'

    def save(self):
        super().save()
        user = self.user
        user.balance += self.amount
        user.save()

    class Meta:
        verbose_name_plural = 'Баланс'
        verbose_name = 'Баланс'
