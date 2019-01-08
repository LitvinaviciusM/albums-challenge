import { countBy, map, join } from 'lodash';

const priceCategories = {
  1: '0 - 5',
  2: '5 - 10',
  3: '10 - 15',
  4: '15 - 20',
};

const getCategory = value => {
  const val = Number(value);

  if (val < 5) return 1;
  if (val >= 5 && val < 10) return 2;
  if (val >= 10 && val < 15) return 3;
  if (val >= 15 && val < 20) return 4;
};

const matchYear = (value, filter) => {
  const year = new Date(value).getFullYear();

  return filter.indexOf(year.toString()) !== -1;
};

const matchPrice = (value, filter) => {
  const category = getCategory(value);
  return filter.indexOf(category.toString()) !== -1;
};

export const getSelectionsByYear = albums =>
  map(countBy(albums, album => new Date(album.releaseDate.value).getFullYear()),
    (key, value) => ({ category: value, count: key}));

export const getSelectionsByPrice = albums =>
  map(countBy(albums, album => getCategory(album.price.value)),
    (key, value) => ({ category: value, count: key}));

export const getSelectionDisplayVal = (category, count, variant) => {
  if (variant === 'year') {
    return `${category} (${count})`;
  }

  if (variant === 'price') {
    return `${priceCategories[category]} (${count})`;
  }

  return '';
};

export const setFilterValue = (selected, value) => {
  if (selected.indexOf(value) === -1) {
    return [...selected, value];
  } else {
    return selected.filter(val => val !== value);
  }
};

export const hashFilter = filter => {
  const { year, price } = filter;
  const yearQuery = '?year=' + join(year, ',');
  const priceQuery = '&price=' + join(price, ',');
  const query = yearQuery + priceQuery;

  let hash = 0, i, chr, len;
  if (query.length === 0) return hash;
  for (i = 0, len = query.length; i < len; i++) {
    chr   = query.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0 // Convert to 32bit integer
  }
  return hash
};

export const applyFilterToFeed = (filter, feed) => {
  const { year, price } = filter;

  return feed.filter(album => {
    if (year.length && price.length) {
      return matchPrice(album.price.value, price) && matchYear(album.releaseDate.value, year);
    }
    if (year.length) return matchYear(album.releaseDate.value, year);
    if (price.length) return matchPrice(album.price.value, price);

    return true;
  });
};
