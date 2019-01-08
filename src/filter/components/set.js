import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Selection from './selection';

const Set = ({ variant, selections, onChange }) => (
  <section className="box">
    <div className="box__header">
      {variant}
    </div>
    <Fragment>
      {selections && selections.map(selection =>
        <Selection
          key={selection.category}
          variant={variant}
          onChange={onChange}
          { ...selection }
        />
      )}
    </Fragment>
  </section>
);

Set.propTypes = {
  variant: PropTypes.string,
  selections: PropTypes.array,
  onChange: PropTypes.func,
};

export default Set;
