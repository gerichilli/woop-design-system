import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stack.module.scss';

export function Stack({ children, direction, spacing, alignment, justify }) {
  const directionClass = styles[`stack--${direction}`];
  const spacingClass = styles[`stack--${spacing}`];
  const alignmentClass = styles[`stack--${alignment}`];

  const stackClass = `${styles.stack} ${directionClass} ${spacingClass} ${alignmentClass}`;

  return <div className={stackClass}>{children}</div>;
}

Stack.defaultProps = {
    direction: 'row',
    spacing: 'm1',
    alignment: 'stretch',
    justify: 'start',
}

Stack.propTypes = {
    direction: PropTypes.oneOf(['row', 'column']),
    spacing: PropTypes.string,
    alignment: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
    justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
}