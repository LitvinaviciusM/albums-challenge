import React from 'react';
import PropTypes from 'prop-types';

const Album = ({
  imgSrc,
  title,
  price,
}) => (
  <div className="album">
    <img
      className="album__img"
      src={imgSrc}
      alt={title}
    />
    <span className="album__title">
      {title}
    </span>
    <span className="album__price">
      {price && price.label}
    </span>
  </div>
);

Album.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.object,
};

export default Album;
