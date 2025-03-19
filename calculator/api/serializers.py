from rest_framework import serializers
from ..models import Auction, Location, Port


class PortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Port
        fields = '__all__'


class AuctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auction
        fields = '__all__'


class LocationSerializer(serializers.ModelSerializer):
    auction_name = serializers.CharField(source='auction.name', read_only=True)
    port_name = serializers.CharField(source='port.name', read_only=True)

    class Meta:
        model = Location
        fields = ['id', 'auction', 'auction_name', 'name', 'delivery_cost',
                  'port', 'port_name', 'is_active']
