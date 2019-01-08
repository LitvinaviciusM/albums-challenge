import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Set from './components/set';
import { onFilterChange } from './actions';
import './index.scss';

const Filter = ({ filter, onFilterChange }) => (
  <aside className="filter">
    <Set
      variant="price"
      selections={filter.selections.price}
      onChange={e => onFilterChange(e.target.value, 'price')}
    />
    <Set
      variant="year"
      selections={filter.selections.year}
      onChange={e => onFilterChange(e.target.value, 'year')}
    />
  </aside>
);

Filter.propTypes = {
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onFilterChange: (value, variant) => dispatch(onFilterChange(value, variant))
});

export default connect(null, mapDispatchToProps)(Filter);
