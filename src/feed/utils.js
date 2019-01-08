import { get } from 'lodash';

export const mapAlbumsResponse = res => {
  const albums = get(res, 'feed.entry', []);

  return albums.map(album => ({
    title: get(album, 'im:name.label'),
    imgSrc: get(album, 'im:image[0].label'),
    price: {
      label: get(album, 'im:price.label'),
      value: get(album, 'im:price.attributes.amount'),
    },
    id: get(album, 'id.attributes.im:id'),
    releaseDate: {
      label: get(album, 'im:releaseDate.attributes.label'),
      value: get(album, 'im:releaseDate.label'),
    },
  }));
};
