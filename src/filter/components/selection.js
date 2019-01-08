import React from 'react';
import PropTypes from 'prop-types';
import { getSelectionDisplayVal } from '../utils';

const Selection = ({
  category,
  count,
  variant,
  onChange,
}) => (
  <div className="box__selection">
    <input
      type="checkbox"
      id={category}
      name={category}
      value={category}
      onClick={onChange}
    />
    <label htmlFor={category}>
      {getSelectionDisplayVal(category, count, variant)}
    </label>
  </div>
);

Selection.propTypes = {
  count: PropTypes.number,
  category: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
};

export default Selection;
