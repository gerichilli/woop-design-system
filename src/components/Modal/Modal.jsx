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
    <div className={styles.container}>
      <animated.div className={styles.dialoge} style={animation}>
        <div className={styles.content}>{children}</div>
      </animated.div>
    </div>
  );
}

export function ModalHeader({ children }) {
  return (
    <div className={styles.header}>
      <Text variant="LBold">{children}</Text>
    </div>
  );
}

export function ModalBody({ children }) {
  return <div className={styles.body}>{children}</div>;
}

export function ModalFooter({ children }) {
  return <div className={styles.footer}>{children}</div>;
}

export function ModalCloseButton() {
  return (
    <button className={styles.close} aria-label="Close Modal">
      <Icon icon="close" />
    </button>
  );
}

export function Modal({ children }) {
  return createPortal(
    <div>
      <div className={styles.overlay} />
      {children}
    </div>,
    document.getElementById('modal'),
  );
}
