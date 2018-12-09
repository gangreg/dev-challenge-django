export const getInitialSavings = state => state.interest.savingsAmount
export const getMonthlySavings = state => state.interest.monthlySavings
export const getInterestRateInDecimal = state => state.interest.interestRate / 100