import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Icon } from '../Icon';

export const Button = forwardRef(function Button (props, ref){
  const {apperiance, size, leftIcon, rightIcon, variant, children, ...restProps} = props;

  const apperianceClass = styles[`btn--${apperiance}`]; 
  const sizeClass = styles[`btn--${size}`];
  const variantClass = variant === "icon" ? styles['btn--icon'] : '';
  
  const btnClass = `${styles.btn} ${apperianceClass} ${sizeClass} ${variantClass}`
  const btnText = leftIcon || rightIcon ? <span>{children}</span> : children;
  
  return (
    <button className={btnClass} {...restProps} ref={ref}>
      {leftIcon && <Icon icon={leftIcon} />}
      {children && btnText}
      {rightIcon && <Icon icon={rightIcon} />}
    </button>
  );
});

Button.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  type: 'button',
  disabled: false,
  variant: "standard",
  apperiance: "primary",
};

Button.propTypes = {
  apperiance: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'warning', 'attention', 'success', 'danger']).isRequired,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l']).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  variant: PropTypes.oneOf(['icon', 'standard']),
};
