import * as actionTypes from './actionTypes';

export const initialState = {
  savingsAmount: 1000,
  interestRate: 0.1
}

const interestReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_CALCULATION_FIELD:
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state;
  }
};

export default interestReducer;