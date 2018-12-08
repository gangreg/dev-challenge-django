import * as actionTypes from './actionTypes';

export const updateCalculationField = (field, value) => ({
  type: actionTypes.UPDATE_CALCULATION_FIELD,
  field,
  value,
});