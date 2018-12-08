import { combineReducers } from 'redux';
import interestReducer from './interest/reducer';

export const rootReducer = combineReducers({
  interest: interestReducer
})
