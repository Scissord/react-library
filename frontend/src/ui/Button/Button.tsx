import { FC, ReactNode } from 'react';
import { Icon } from '@ui';

// import styles from './Button.module.scss';
// icon - react-icons
// className "btn"

type ButtonProps = {
  text?: string;
  className?: string;
  children?: string;
  onClick: () => void;
  icon?: ReactNode,
  leftIcon?: ReactNode;
	leftIconSize?: number | string;
  rightIcon?: ReactNode;
	rightIconSize?: number | string;
};

export const Button: FC<ButtonProps> = (props) => {
	const { 
    text, className, children, 
    onClick, leftIcon, 
    leftIconSize, rightIcon, 
    rightIconSize
  } = props;

  return (
    <button 
      className={className} 
      onClick={onClick}
    >
      {leftIcon && <Icon icon={leftIcon} size={leftIconSize}/>}
      {text}{children}
      {rightIcon && <Icon icon={rightIcon} size={rightIconSize}/>}
    </button>
  );
};
