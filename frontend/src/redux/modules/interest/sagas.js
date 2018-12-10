import { delay } from 'redux-saga'
import { takeLatest, call, select, put } from 'redux-saga/effects';
import { calculateSuccess, calculateFailure } from './actions';
import { calculate } from '../../../API';
import { getInitialSavings, getMonthlySavings, getInterestRateInDecimal, getPayoutFrequency} from './selectors';

function* updateCalculationSaga(action) {
  yield call(delay, 500);
  const intialSavings = yield select(getInitialSavings)
  const monthlySavings = yield select(getMonthlySavings)
  const payoutFrequency = yield select(getPayoutFrequency)
  const interestRate = yield select(getInterestRateInDecimal)
  try {
    const results = yield call(calculate, intialSavings, monthlySavings, payoutFrequency, interestRate)
    yield put(calculateSuccess(results.data.result))
  } catch (error) {
    yield put(calculateFailure(error))
  }
}


export function* watchInterest() {
  yield takeLatest('interest/UPDATE_CALCULATION_FIELD', updateCalculationSaga)
  yield takeLatest('interest/CALCULATE_REQUEST', updateCalculationSaga)
}