import { combineReducers } from "redux";
import { handleActions } from 'redux-actions';
import { searchRequest } from '../actions'

const isFetching = handleActions({
    [searchRequest]: () => true,
  },
  false
);

export default combineReducers({
  isFetching
});