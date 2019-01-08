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

export const initFilters = () => (dispatch, getState) => {
  const { feed } = getState();
  const year = getSelectionsByYear(feed);
  const price = getSelectionsByPrice(feed);

  dispatch({ type: 'INIT_YEAR_FILTER', payload: year });
  dispatch({ type: 'INIT_PRICE_FILTER', payload: price });
};

export const onFilterChange = (value, variant) => async dispatch => {
  await dispatch({ type: 'TOGGLE_FILTER_SELECTION', payload: { variant, value }});
  dispatch(setFilteredFeed());
};
