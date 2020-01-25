import { createActions } from 'redux-actions';

const actionCreators = createActions({
  SEARCH: {
    REQUEST: undefined,
    SUCCESS: [
      (shows) => ({shows}),
      (shows) => ({ length: shows.length })
    ],
    FAILURE: undefined
  }
});

export const {
  searchRequest,
  searchSuccess,
  searchFailure } = actionCreators;