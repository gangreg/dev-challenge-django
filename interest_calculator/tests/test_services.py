"""
Test the Calculator Service
"""
from django.test import SimpleTestCase
from interest_calculator.services import calculate_interest_over_50_years

class CalculatorServiceTestCase(SimpleTestCase):
    """
    Test the Calculator Service
    """

    def test_calculate_interest_over_50_years_monthly(self):
        """
        Tests calculation of interest over 50 years with monthly interest
        """
        
        someExpected = [1, 2.02, 3.05, 4.08, 5.12, 6.17, 7.23, 8.3, 9.38, 10.47, 11.57]
        results = calculate_interest_over_50_years(1, 1, 12, 0.1)
        for monthsMoney in someExpected:
            self.assertIn(monthsMoney, results)

    def test_calculate_interest_over_50_years_yearly(self):
        """
        Tests calculation of interest over 50 years with yearly interest
        """
        
        someExpected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14.3]
        results = calculate_interest_over_50_years(1, 1, 1, 0.1)
        for monthsMoney in someExpected:
            self.assertIn(monthsMoney, results)

    def test_calculate_interest_over_50_years_quarterly(self):
        """
        Tests calculation of interest over 50 years with quarterly interest
        """
        
        someExpected = [1, 2, 3, 4.1, 5.1, 6.1, 7.28, 8.28, 9.28, 10.54, 11.54]
        results = calculate_interest_over_50_years(1, 1, 4, 0.1)
        for monthsMoney in someExpected:
            self.assertIn(monthsMoney, results)
