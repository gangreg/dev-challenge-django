export const getInitialSavings = state => state.interest.savingsAmount
export const getMonthlySavings = state => state.interest.monthlySavings
export const getInterestRateInDecimal = state => state.interest.interestRate / 100

export const getGraphFormattedData = state => state.interest.monthlyData && 
  state.interest.monthlyData.map((data, index) => {
    return {
      month: index + 1,
      amount: data,
    }
  })