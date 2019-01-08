import { getAlbums, apiTask } from '../api';
import { mapAlbumsResponse } from './utils';

export const fetchAlbums = () => dispatch =>
  apiTask(dispatch, 'GET_ALBUMS', getAlbums(100, 'json'), { map: mapAlbumsResponse });
