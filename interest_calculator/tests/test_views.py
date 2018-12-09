"""
Views tests
"""

from django.test import SimpleTestCase, Client
from interest_calculator.serializer import CalculateSerializer

class CalculateViewTestCase(SimpleTestCase):
    """
    Test case for Calculate View
    """

    def setUp(self):
        """
        Sets up client
        """
        self.client = Client()
        self.request_body = {
            "savingsAmount": 50.5,
            "monthlySavings": 34,
            "interestRate": 2
        }

    def test_post(self):
        response = self.client.post('/calculate/', self.request_body)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, {'result': 1000})