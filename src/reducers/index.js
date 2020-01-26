import { combineReducers } from 'redux';
import search from './search';
import shows from './shows';

export default combineReducers({
  search,
  shows
});


export const getSearchResultSelector = state => state.search.result;
export const getIsFetchingSelector = state => state.search.isFetching;
export const getIsFetchedSelector = state => state.search.isFetched;


export const getEntitiesSelector = state => state.shows.entities;
export const getIsFetchingEntitiesSelector = state => state.shows.isFetching;