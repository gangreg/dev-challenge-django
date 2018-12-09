
def calculate_interest_over_50_years(initial, monthly_deposit, interest):
    number_of_years = 50
    results = [initial]
    current = initial
    compound_interest_rate = (interest / 12) + 1
    for _month in range(number_of_years * 12):
        monthly_amount = current + monthly_deposit
        current = round(monthly_amount * compound_interest_rate, 2)
        results.append(current)
    return results
