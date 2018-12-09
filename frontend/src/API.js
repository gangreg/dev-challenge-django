import request from "axios"

export const calculate = (savingsAmount, monthlySavings, interestRate) => {
	return request
		.post("/calculate/", {
			savingsAmount,
			monthlySavings,
			interestRate
		})
}
