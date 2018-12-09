import { combineReducers } from 'redux';
import interestReducer from './interest/reducer';
import { watchInterest } from './interest/sagas';

export const rootReducer = combineReducers({
  interest: interestReducer
})

export function* rootSaga() {
  yield [
    watchInterest(),
  ];
}