import { FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
	const { label, onClick } = props;

  return (
    <button className={styles.custom_button} onClick={onClick}>
      {label}
    </button>
  );
};
