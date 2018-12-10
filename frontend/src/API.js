import request from "axios"

export const calculate = (savingsAmount, monthlySavings, payoutFrequency, interestRate) => {
	return request
		.post("/calculate/", {
			savingsAmount,
			monthlySavings,
			payoutFrequency,
			interestRate
		})
}
