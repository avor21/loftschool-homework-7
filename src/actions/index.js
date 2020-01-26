import { createActions } from 'redux-actions';

const actionCreators = createActions({
  SHOWS: {
    SEARCH: {
      SEARCH_REQUEST: undefined,
      SEARCH_SUCCESS: undefined,
      SEARCH_FAILURE: undefined
    }
  }
});

export const {
  shows: {
    search: {
      searchRequest, searchSuccess, searchFailure
    }
  }
} = actionCreators;