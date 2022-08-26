import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.module.scss';

export function Text({ children, variant, fontWeight, fontSize }) {
  const customTextClass = `${fontWeight && styles[`fw--${fontWeight}`]} ${fontSize && styles[`fs--${fontSize}`]}`;
  const textClass = `${styles[`text--${variant}`]} ${customTextClass}`;

  return <p className={textClass}>{children}</p>;
}

Text.defaultProps = {
  variant: 'M',
  fontWeight: '',
  fontSize: '',
};

Text.propTypes = {
  variant: PropTypes.oneOf(['LBold', 'L', 'MBold', 'M', 'SBold', 'S', 'XSBold', 'XS']),
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
};
