from rest_framework import serializers
from ..models import ExchangeRate

class ExchangeRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExchangeRate
        fields = ['USD_rate', 'USD_source', 'EUR_rate', 'EUR_source', 'last_updated']
        read_only_fields = ['last_updated']
