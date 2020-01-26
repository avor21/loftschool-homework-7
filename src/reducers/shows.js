import { handleActions, handleAction } from 'redux-actions';
import { combineReducers } from "redux";
import { fetchShowRequest, fetchShowSuccess, fetchShowFailure } from '../actions';

const isFetching = handleActions({
    [fetchShowRequest]: () => true,
    [fetchShowSuccess]: () => false,
    [fetchShowFailure]: () => false
  },
  false
);

const entities = handleAction(
  fetchShowSuccess,
  (state, action) => action.payload,
  []
);

export default combineReducers({
  isFetching,
  entities
});