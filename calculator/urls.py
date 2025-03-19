from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api.views import AuctionViewSet, LocationViewSet, PortViewSet

router = DefaultRouter()
router.register('ports', PortViewSet, basename='port')
router.register('auctions', AuctionViewSet, basename='auction')
router.register('locations', LocationViewSet, basename='location')


urlpatterns = [
    path('', include(router.urls)),
]