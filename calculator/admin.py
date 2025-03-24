# calculator/admin.py
from django.contrib import admin
from django.shortcuts import render, redirect
from django.urls import path
from django.contrib import messages
from django import forms
import csv
import io
from .models import Auction, Location, Port

class CsvImportForm(forms.Form):
    csv_file = forms.FileField()

@admin.register(Port)
class PortAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    
    change_list_template = 'admin/port_changelist.html'
    
    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path('import-csv/', self.import_csv),
        ]
        return my_urls + urls
        
    def import_csv(self, request):
        if request.method == "POST":
            csv_file = request.FILES["csv_file"]
            decoded_file = csv_file.read().decode('utf-8')
            lines = decoded_file.split('\n')
            
            # Пропускаем заголовок
            if len(lines) > 1:
                lines = lines[1:]
            
            for line in lines:
                if not line.strip():  # Пропускаем пустые строки
                    continue
                    
                # Разделяем строку по точке с запятой
                row = line.split(';')
                if not row[0].strip():  # Пропускаем строки без имени порта
                    continue
                    
                Port.objects.update_or_create(
                    name=row[0].strip(),
                )
                
            self.message_user(request, "Импорт портов успешно выполнен")
            return redirect("..")
        form = CsvImportForm()
        context = {
            'form': form,
            'title': 'Импорт портов из CSV',
            'opts': self.model._meta,
        }
        return render(
            request, "admin/csv_form.html", context
        )

@admin.register(Auction)
class AuctionAdmin(admin.ModelAdmin):
    list_display = ('name', 'auction_type', 'is_active')
    list_filter = ('auction_type', 'is_active')
    search_fields = ('name',)
    
    change_list_template = 'admin/auction_changelist.html'
    
    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path('import-csv/', self.import_csv),
        ]
        return my_urls + urls
        
    def import_csv(self, request):
        if request.method == "POST":
            csv_file = request.FILES["csv_file"]
            decoded_file = csv_file.read().decode('utf-8')
            lines = decoded_file.split('\n')
            
            # Пропускаем заголовок
            if len(lines) > 1:
                lines = lines[1:]
            
            for line in lines:
                if not line.strip():  # Пропускаем пустые строки
                    continue
                    
                # Разделяем строку по точке с запятой
                row = line.split(';')
                if len(row) < 3 or not row[0].strip():  # Проверяем наличие всех полей
                    continue
                    
                Auction.objects.update_or_create(
                    name=row[0].strip(),
                    defaults={
                        'auction_type': row[1].strip(),
                        'is_active': row[2].strip().lower() in ['true', '1', 'yes', 'да', 'активный', 'активен'],
                    }
                )
                
            self.message_user(request, "Импорт аукционов успешно выполнен")
            return redirect("..")
        form = CsvImportForm()
        context = {
            'form': form,
            'title': 'Импорт аукционов из CSV',
            'opts': self.model._meta,
        }
        return render(
            request, "admin/csv_form.html", context
        )

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('name', 'auction', 'delivery_cost', 'port', 'is_active')
    list_filter = ('auction', 'port', 'is_active')
    search_fields = ('name', 'auction__name')
    autocomplete_fields = ('auction', 'port')
    
    change_list_template = 'admin/location_changelist.html'
    
    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path('import-csv/', self.import_csv),
        ]
        return my_urls + urls
        
    def import_csv(self, request):
        if request.method == "POST":
            csv_file = request.FILES["csv_file"]
            decoded_file = csv_file.read().decode('utf-8')
            lines = decoded_file.split('\n')
            
            # Пропускаем заголовок
            if len(lines) > 1:
                lines = lines[1:]
            
            error_rows = []
            for i, line in enumerate(lines, start=2):  # Нумеруем с 2, чтобы учесть строку заголовка
                if not line.strip():  # Пропускаем пустые строки
                    continue
                    
                # Разделяем строку по точке с запятой
                row = line.split(';')
                if len(row) < 5 or not row[0].strip():  # Проверяем наличие всех полей
                    continue
                    
                try:
                    auction_name = row[0].strip()
                    location_name = row[1].strip()
                    delivery_cost = row[2].strip()
                    port_name = row[3].strip()
                    is_active = row[4].strip().lower() in ['true', '1', 'yes', 'да', 'активный', 'активен']
                    
                    try:
                        auction = Auction.objects.get(name=auction_name)
                    except Auction.DoesNotExist:
                        error_rows.append(f"Строка {i}: Аукцион '{auction_name}' не найден")
                        continue
                        
                    try:
                        port = Port.objects.get(name=port_name)
                    except Port.DoesNotExist:
                        error_rows.append(f"Строка {i}: Порт '{port_name}' не найден")
                        continue
                    
                    Location.objects.update_or_create(
                        auction=auction,
                        name=location_name,
                        defaults={
                            'delivery_cost': delivery_cost,
                            'port': port,
                            'is_active': is_active,
                        }
                    )
                except Exception as e:
                    error_rows.append(f"Строка {i}: {str(e)}")
            
            if error_rows:
                self.message_user(
                    request, 
                    f"Импорт локаций выполнен с ошибками:\n" + "\n".join(error_rows),
                    level=messages.WARNING
                )
            else:
                self.message_user(request, "Импорт локаций успешно выполнен")
            return redirect("..")
            
        form = CsvImportForm()
        context = {
            'form': form,
            'title': 'Импорт локаций из CSV',
            'opts': self.model._meta,
        }
        return render(
            request, "admin/csv_form.html", context
        )
