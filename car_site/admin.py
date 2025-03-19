from django.contrib import admin
from django.urls import reverse

from .forms import AuctionDataForm
from .models import UsaCard, AdvUser, KoreaCard, EuropeCard, UsaPhoto, UsaPaymentFile, UserBalance, UsaCustomDocument, \
    UsaExtraLink, AuctionData, UsaPayment, UsaTracking, EuropePhoto, EuropeBelarusPhoto, EuropePaymentFile, \
    EuropeExtraLink, EuroPayment, EuroPlatform, EuropeTracking, EuropeCustomDocument, KoreaCustomDocument, KoreaPayment, \
    KoreaExtraLink, KoreaPaymentFile, KoreaTKPhoto, KoreaPhoto, UsaMoscowPhoto, UsaBelarusPhoto, UsaTakenPhoto, \
    UsaOpenPhoto

admin.site.site_url = '/card/usa'
admin.site.site_header = 'America Car Trans'


class AdvUserAdmin(admin.ModelAdmin):
    model = AdvUser
    list_display = ('__str__', 'date_joined')
    search_fields = ('username', 'email', 'phone_number', 'first_name', 'last_name')
    fields = (('username',),
              ('password',),
              ('email', 'phone_number'),
              ('first_name', 'last_name'),
              ('balance',),
              ('is_superuser', 'is_staff'), ('groups',),
              ('last_login', 'date_joined'))
    readonly_fields = ('last_login', 'date_joined', 'balance')
    autocomplete_fields = ('groups',)

    def save_model(self, request, obj, form, change):
        # Override this to set the password to the value in the field if it's
        # changed.
        if obj.pk:
            orig_obj = AdvUser.objects.get(pk=obj.pk)
            if obj.password != orig_obj.password:
                obj.set_password(obj.password)
        else:
            obj.set_password(obj.password)
        obj.save()


admin.site.register(AdvUser, AdvUserAdmin)


# admin.site.register(UsaAuction)
# admin.site.register(UsaPlatform)


class UsaAuctionDataInline(admin.TabularInline):
    model = AuctionData
    form = AuctionDataForm
    min_num = 1
    max_num = 1
    can_delete = False


class AllowedCombinationAdmin(admin.ModelAdmin):
    list_display = ['auction', 'platform']


# admin.site.register(UsaAllowedCombination, AllowedCombinationAdmin)


class AuctionDataAdmin(admin.ModelAdmin):
    form = AuctionDataForm


# admin.site.register(AuctionData, AuctionDataAdmin)


class UserBalanceAdmin(admin.ModelAdmin):
    list_display = ('user', 'description', 'amount', 'date_created')
    list_filter = [
        "user",
    ]
    search_fields = ('user__username', 'user__first_name', 'user__last_name', 'description')


admin.site.register(UserBalance, UserBalanceAdmin)


class UsaImageInline(admin.TabularInline):
    model = UsaPhoto
    extra = 1


class UsaOpenPhotoInline(admin.TabularInline):
    model = UsaOpenPhoto
    extra = 1


class UsaTakenPhotoInline(admin.TabularInline):
    model = UsaTakenPhoto
    extra = 1


class UsaBelarusPhotoInline(admin.TabularInline):
    model = UsaBelarusPhoto
    extra = 1


class UsaMoscowPhotoInline(admin.TabularInline):
    model = UsaMoscowPhoto
    extra = 1


class UsaFileInline(admin.TabularInline):
    model = UsaPaymentFile
    extra = 1


class UsaCustomDocumentInline(admin.TabularInline):
    model = UsaCustomDocument
    extra = 1


class UsaExtraLinkInline(admin.TabularInline):
    model = UsaExtraLink
    extra = 1


class UsaPaymentInline(admin.StackedInline):
    model = UsaPayment
    min_num = 1
    max_num = 1
    can_delete = False


class UsaTrackingInline(admin.TabularInline):
    model = UsaTracking
    min_num = 1
    max_num = 1
    can_delete = False


class UsaCardAdmin(admin.ModelAdmin):
    model = UsaCard
    inlines = (
        UsaTrackingInline, UsaAuctionDataInline, UsaPaymentInline,
        UsaImageInline, UsaOpenPhotoInline, UsaTakenPhotoInline, UsaBelarusPhotoInline,
        UsaMoscowPhotoInline, UsaFileInline, UsaCustomDocumentInline, UsaExtraLinkInline
    )
    list_display = ('user', 'model', 'vin_number', 'date_created')
    list_filter = [
        "user",
    ]
    search_fields = (
        'vin_number', 'model', 'auction_data__auction__name', 'user__username',
        'user__first_name', 'user__last_name', 'user__email', 'auction_data__user_name',
        'auction_data__container_number', 'auction_data__lot_number', 'payment__port',
        'auction_data__platform__name',
    )

    def view_on_site(self, obj):
        return reverse("usa_card", kwargs={"pk": obj.pk})


admin.site.register(UsaCard, UsaCardAdmin)


class EuropePhotoInline(admin.TabularInline):
    model = EuropePhoto
    extra = 1


class EuropeBelarusPhotoInline(admin.TabularInline):
    model = EuropeBelarusPhoto
    extra = 1


class EuropePaymentFileInline(admin.TabularInline):
    model = EuropePaymentFile
    extra = 1


class EuropeExtraLinkInline(admin.TabularInline):
    model = EuropeExtraLink
    extra = 1


class EuroPaymentInline(admin.StackedInline):
    model = EuroPayment
    min_num = 1
    max_num = 1
    can_delete = False


class EuroPlatformInline(admin.StackedInline):
    model = EuroPlatform
    min_num = 1
    max_num = 1
    can_delete = False


class EuropeTrackingInline(admin.TabularInline):
    model = EuropeTracking
    min_num = 1
    max_num = 1
    can_delete = False


class EuropeCustomDocumentInline(admin.TabularInline):
    model = EuropeCustomDocument
    extra = 1


class EuropeCardAdmin(admin.ModelAdmin):
    inlines = (
        EuropeTrackingInline, EuroPlatformInline, EuroPaymentInline,
        EuropePhotoInline, EuropeBelarusPhotoInline, EuropeCustomDocumentInline,
        EuropePaymentFileInline, EuropeExtraLinkInline,
    )

    list_display = ('user', 'model', 'vin_number', 'date_created')
    list_filter = [
        "user",
    ]
    search_fields = (
        'vin_number', 'model', 'user__username',
        'user__first_name', 'user__last_name', 'user__email',
    )

    def view_on_site(self, obj):
        return reverse("europe_card", kwargs={"pk": obj.pk})


admin.site.register(EuropeCard, EuropeCardAdmin)


class KoreaPhotoInline(admin.TabularInline):
    model = KoreaPhoto


class KoreaTKPhotoInline(admin.TabularInline):
    model = KoreaTKPhoto
    extra = 1


class KoreaPaymentFileInline(admin.TabularInline):
    model = KoreaPaymentFile
    extra = 1


class KoreaExtraLinkInline(admin.TabularInline):
    model = KoreaExtraLink
    extra = 1


class KoreaPaymentInline(admin.StackedInline):
    model = KoreaPayment
    min_num = 1
    max_num = 1
    can_delete = False


class KoreaCustomDocumentInline(admin.TabularInline):
    model = KoreaCustomDocument
    extra = 1


class KoreaCardAdmin(admin.ModelAdmin):
    inlines = (
        KoreaPaymentInline, KoreaPhotoInline, KoreaTKPhotoInline,
        KoreaCustomDocumentInline, KoreaPaymentFileInline, KoreaExtraLinkInline,
    )

    list_display = ('user', 'model', 'vin_number', 'date_created')
    list_filter = [
        "user",
    ]
    search_fields = (
        'vin_number', 'model', 'user__username',
        'user__first_name', 'user__last_name', 'user__email',
    )

    def view_on_site(self, obj):
        return reverse("korea_card", kwargs={"pk": obj.pk})


admin.site.register(KoreaCard, KoreaCardAdmin)
