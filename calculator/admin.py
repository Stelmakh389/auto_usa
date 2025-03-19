# calculator/admin.py
from django.contrib import admin
from .models import Auction, Location, Port

@admin.register(Port)
class PortAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Auction)
class AuctionAdmin(admin.ModelAdmin):
    list_display = ('name', 'auction_type', 'is_active')
    list_filter = ('auction_type', 'is_active')
    search_fields = ('name',)

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('name', 'auction', 'delivery_cost', 'port', 'is_active')
    list_filter = ('auction', 'port', 'is_active')
    search_fields = ('name', 'auction__name')
    autocomplete_fields = ('auction', 'port')