
def calculate_interest_over_50_years(initial, monthly_deposit, payoutFrequency, interest):
    number_of_years = 50
    results = [initial]
    current = initial
    compound_interest_rate = (interest / payoutFrequency) + 1
    payout_month = 1 / (payoutFrequency/12)
    for month in range(1, number_of_years * 12 + 1):
        monthly_amount = current + monthly_deposit
        if not (month % payout_month == 0):
            current = round(monthly_amount,2)
        else:
            current = round(monthly_amount * compound_interest_rate, 2)
        results.append(current)
    return results
