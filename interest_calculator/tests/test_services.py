"""
Test the Calculator Service
"""
from django.test import SimpleTestCase
from interest_calculator.services import calculate_interest_over_50_years

class CalculatorServiceTestCase(SimpleTestCase):
    """
    Test the Calculator Service
    """

    def test_calculate_interest_over_50_years(self):
        """
        Tests test_description
        """
        
        someExpected = [1, 2.02, 3.05, 4.08, 5.12, 6.17, 7.23, 8.3, 9.38, 10.47, 11.57]
        results = calculate_interest_over_50_years(1, 1, 0.1)
        for monthsMoney in someExpected:
            self.assertIn(monthsMoney, results)
