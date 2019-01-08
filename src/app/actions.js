import { fetchAlbums } from '../feed/actions';
import { initFilters, setFilteredFeed } from '../filter/actions';

export const init = () => async dispatch => {
  await dispatch(fetchAlbums());
  dispatch(initFilters());
  dispatch(setFilteredFeed());
};
