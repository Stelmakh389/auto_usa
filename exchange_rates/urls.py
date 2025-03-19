from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api.views import ExchangeRateViewSet

router = DefaultRouter()
router.register('rates', ExchangeRateViewSet, basename='exchangerate')

urlpatterns = [
    path('', include(router.urls)),
]