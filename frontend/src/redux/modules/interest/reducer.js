import * as actionTypes from './actionTypes';

export const initialState = {
  savingsAmount: 1000,
  monthlySavings: 100,
  interestRate: 0.1,
  monthlyData: []
}

const interestReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_CALCULATION_FIELD:
      return {
        ...state,
        [action.field]: action.value
      }
    case actionTypes.CALCULATE.SUCCESS:
      return {
        ...state,
        monthlyData: action.data
      }
    default:
      return state;
  }
};

export default interestReducer;