import React from 'react';
import { createPortal } from 'react-dom';
import { useSpring, animated } from 'react-spring';
import styles from './Modal.module.scss';
import { Text } from '../Typography';
import { Icon } from '../Icon';

export function ModalContent({ children }) {
  const animation = useSpring({
    from: { opacity: 0, transform: "translateX(-50%) scale(0.9)"},
    to: { opacity: 1, transform: "translateX(-50%) scale(1)" },
    config: { duration: 400 }
  });

  return (
    <div className={styles.Container}>
      <animated.div className={styles.Dialoge} style={animation}>
        <div className={styles.Content}>{children}</div>
      </animated.div>
    </div>
  );
}

export function ModalHeader({ children }) {
  return (
    <div className={styles.Header}>
      <Text variant="LBold">{children}</Text>
    </div>
  );
}

export function ModalBody({ children }) {
  return <div className={styles.Body}>{children}</div>;
}

export function ModalFooter({ children }) {
  return <div className={styles.Footer}>{children}</div>;
}

export function ModalCloseButton() {
  return (
    <button className={styles.Close} aria-label="Close Modal">
      <Icon icon="close" />
    </button>
  );
}

export function Modal({ children }) {
  return createPortal(
    <div>
      <div className={styles.Overlay} />
      {children}
    </div>,
    document.getElementById('modal'),
  );
}
