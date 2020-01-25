import { combineReducers } from "redux";
import { handleAction, handleActions } from 'redux-actions';
import { searchRequest, searchSuccess,  searchFailure } from '../actions'

const isFetching = handleActions({
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

const result = handleAction(
  searchSuccess,
  (state, action) => action.payload,
  []
);

const error = handleAction(
  searchFailure,
  (state, action) => action.payload,
  null
);

export default combineReducers({
  isFetching,
  result,
  error
});