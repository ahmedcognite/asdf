import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

/* eslint-disable-next-line */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${
        props.fullWidth ? styles['full-width'] : ''
      }`}
      {...props}
    />
  );
}

export default Button;
