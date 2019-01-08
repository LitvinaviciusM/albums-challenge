import React from 'react';
import PropTypes from 'prop-types';
import Album from './components/album';
import './index.scss';

const Feed = ({ feed }) => (
  <section className="feed">
    {feed && feed.map(album => (
      <Album
        key={album.id}
        {...album}
      />
    ))}
  </section>
);

Feed.propTypes = {
  feed: PropTypes.array,
};

export default Feed;
