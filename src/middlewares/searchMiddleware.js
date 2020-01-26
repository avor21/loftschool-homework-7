import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { search } from "../api";

export default ({ dispatch }) => next => action => {
  const { type, payload } = action;

  if (type === searchRequest.toString()) {
    search(payload)
      .then(shows => dispatch(searchSuccess(shows)))
      .catch(error => dispatch(searchFailure(error)));
  }

  return next(action);
};