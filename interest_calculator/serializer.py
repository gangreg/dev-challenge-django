"""
Serializer for interest calculator
"""

from rest_framework import serializers

class CalculateSerializer(serializers.Serializer):
    """
    Serialize the calculate view
    """

    savingsAmount = serializers.FloatField(allow_null=False, min_value=0)
    monthlySavings = serializers.FloatField(allow_null=False, min_value=0)
    interestRate = serializers.FloatField(allow_null=False, min_value=0)
