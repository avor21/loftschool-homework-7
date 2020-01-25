import { createActions } from 'redux-actions';

const actionCreators = createActions({
  SHOW: {
    SEARCH_REQUEST: undefined,
    SEARCH_SUCCESS: [
      shows => shows,
      (shows) => ({ length: shows.length })
    ],
    SEARCH_FAILURE: undefined
  }
});

export const {
  show: { searchRequest,
          searchSuccess,
          searchFailure }} = actionCreators;