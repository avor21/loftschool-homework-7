import { createActions } from 'redux-actions';

const actionCreators = createActions({
  SHOWS: {
    SEARCH: {
      SEARCH_REQUEST: undefined,
      SEARCH_SUCCESS: undefined,
      SEARCH_FAILURE: undefined
    },
    SHOW: {
      FETCH_SHOW_REQUEST: undefined,
      FETCH_SHOW_SUCCESS: undefined,
      FETCH_SHOW_FAILURE: undefined
    }
  }
});

export const {
  shows: {
    search: {
      searchRequest, searchSuccess, searchFailure
    },
    show: {
      fetchShowRequest, fetchShowSuccess, fetchShowFailure
    }
  }
} = actionCreators;