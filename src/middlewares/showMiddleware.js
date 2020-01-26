import { fetchShowRequest, fetchShowSuccess, fetchShowFailure } from '../actions';
import { show } from '../api';

export default ({ dispatch }) => next => action => {
  if (action.type === fetchShowRequest.toString()) {
    show(action.payload)
      .then(show => dispatch(fetchShowSuccess(show)))
      .catch(error => dispatch(fetchShowFailure(error)))
  }

  return next(action);
};