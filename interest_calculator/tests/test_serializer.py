"""
Serializer tests
"""

from django.test import SimpleTestCase
from interest_calculator.serializer import CalculateSerializer

class CalculateSerializerTestCase(SimpleTestCase):
    """
    Test case for CalculateSerializer
    """
    def test_with_correct_data(self):
        data = {
            "savingsAmount": 25.4,
            "monthlySavings": 5,
            "payoutFrequency": 12,
            "interestRate": 2
        }
        serializer = CalculateSerializer(data=data)
        self.assertTrue(serializer.is_valid())

    def test_with_string(self):
        data = {
            "savingsAmount": 'asd',
            "monthlySavings": 5,
            "payoutFrequency": 12,
            "interestRate": 2
        }
        serializer = CalculateSerializer(data=data)
        self.assertFalse(serializer.is_valid())

    def test_with_negative(self):
        data = {
            "savingsAmount": 35,
            "monthlySavings": 5,
            "payoutFrequency": 12,
            "interestRate": -2
        }
        serializer = CalculateSerializer(data=data)
        self.assertFalse(serializer.is_valid())
