import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/css';
import styles from './Stack.module.scss';

export function Stack({
  children,
  direction,
  spacing,
  alignment,
  justify,
  ...props
}) {

  const className = classNames(
    styles.Stack,
    direction && styles[direction],
    spacing && styles[spacing],
    alignment && styles[`align-${alignment}`],
    justify && styles[`justify-${justify}`],
  );

  return <div className={className} {...props}>{children}</div>;
}

Stack.defaultProps = {
  direction: 'row',
  spacing: 'm1',
  alignment: 'stretch',
  justify: 'start',
};

Stack.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  spacing: PropTypes.string,
  alignment: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
};
