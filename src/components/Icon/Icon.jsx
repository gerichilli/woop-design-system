import React from 'react';
import PropTypes from "prop-types";
import { icons } from '../../assets/icons';
import styles from "./Icon.module.scss";

export function Icon({icon, ...props}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={styles.Icon}
      {...props}
    >
        {icons[icon]}
    </svg>
  );
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
}