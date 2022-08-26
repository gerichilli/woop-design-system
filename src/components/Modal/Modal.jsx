import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { Text } from '../Typography';
import { Icon } from '../Icon';

export function ModalContent({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.dialoge}>
        <div className={styles.content}>{children}</div>
      </div>
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

export function ModalCloseButton({ children }) {
  return (
    <button className={styles.close} aria-label="Close Modal">
      <Icon icon="close"/>
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
