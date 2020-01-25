import { createActions } from 'redux-actions';

const actionCreators = createActions({
  SHOWS: {
    SEARCH_REQUEST: undefined,
    SEARCH_SUCCESS: [
      shows => shows,
      (shows) => ({ length: shows.length })
    ],
    SEARCH_FAILURE: undefined
  }
});

export const {
  shows: { searchRequest,
          searchSuccess,
          searchFailure }} = actionCreators;