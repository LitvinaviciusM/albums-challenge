import { fetchAlbums } from '../feed/actions';
import { setFilters, setFilteredFeed } from '../filter/actions';

export const init = () => async dispatch => {
  await dispatch(fetchAlbums());
  dispatch(setFilteredFeed());
  dispatch(setFilters());
};
