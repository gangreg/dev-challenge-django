import * as actionTypes from './actionTypes';

export const updateCalculationField = (field, value) => ({
  type: actionTypes.UPDATE_CALCULATION_FIELD,
  field,
  value,
});

export const calculateSuccess = data => ({
  type: actionTypes.CALCULATE.SUCCESS,
  data,
})

export const calculateFailure = error => ({
  type: actionTypes.CALCULATE.FAILURE,
  error,
})