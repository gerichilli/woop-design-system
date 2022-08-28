import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/css';
import styles from './Button.module.scss';
import { Icon } from '../Icon';

export const Button = forwardRef(function Button(
  { apperiance, size, leftIcon, rightIcon, isIconOnly, children, ...props },
  ref,
) {
  const className = classNames(
    styles.Button,
    apperiance && styles[apperiance],
    size && styles[size],
    isIconOnly && styles.iconOnly,
  );

  const btnLabel = leftIcon || rightIcon ? <span>{children}</span> : children;

  return (
    <button className={className} {...props} ref={ref}>
      {leftIcon && <Icon icon={leftIcon} />}
      {children && btnLabel}
      {rightIcon && <Icon icon={rightIcon} />}
    </button>
  );
});

Button.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  isIconOnly: false,
  type: 'button',
  disabled: false,
  apperiance: 'primary',
};

Button.propTypes = {
  apperiance: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'warning',
    'attention',
    'success',
    'danger',
  ]).isRequired,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l']).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  isIconOnly: PropTypes.bool,
};
