import {
  getSelectionsByYear,
  getSelectionsByPrice,
  hashFilter,
  applyFilterToFeed,
} from './utils';

export const setFilteredFeed = () => (dispatch, getState) => {
  const { filter: { selected, feed: filteredFeed }, feed } = getState();
  const hash = hashFilter(selected);

  if (filteredFeed[hash]) {
    dispatch({ type: 'SET_CURRENT_HASH', payload: hash });
  }

  const filtered = applyFilterToFeed(selected, feed);
  dispatch({ type: 'SET_FILTERED_FEED', payload: { hash, filtered } });
};

export const setFilters = () => (dispatch, getState) => {
  const { filter: { feed, currentHash } } = getState();
  const filtered = feed[currentHash];
  const year = getSelectionsByYear(filtered);
  const price = getSelectionsByPrice(filtered);

  dispatch({ type: 'SET_YEAR_FILTER', payload: year });
  dispatch({ type: 'SET_PRICE_FILTER', payload: price });
};

export const onFilterChange = (value, variant) => async dispatch => {
  await dispatch({ type: 'TOGGLE_FILTER_SELECTION', payload: { variant, value }});
  dispatch(setFilteredFeed());
  dispatch(setFilters());
};
