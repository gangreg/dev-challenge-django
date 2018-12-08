import interestReducer, { initialState } from '../modules/interest/reducer';
import * as actionTypes from '../modules/interest/actionTypes';

describe('interests reducer', () => {
  it('should change the savingAmount on update', () => {
    const action = {
      type: actionTypes.UPDATE_CALCULATION_FIELD,
      field: 'savingsAmount',
      value: 100
    };
    const newState = interestReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      savingsAmount: 100,
    });
  })
})