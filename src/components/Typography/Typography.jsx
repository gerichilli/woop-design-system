import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/css';
import styles from './Typography.module.scss';

export function Text({ children, variant, fontWeight, fontSize, ...props }) {
  const className = classNames(
    styles.Text,
    variant && styles[variant],
    fontWeight && styles[fontWeight],
    fontSize && styles[fontSize],
  );

  return <p className={className} {...props}>{children}</p>;
}

Text.defaultProps = {
  variant: 'M',
  fontWeight: '',
  fontSize: '',
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    'LBold',
    'L',
    'MBold',
    'M',
    'SBold',
    'S',
    'XSBold',
    'XS',
  ]),
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
};
