import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import { Icon } from '@ui';

// icon - react-icons
// color - black, white, #5F58CC
// className	{styles.a}	
// size	1em	
// mr margin-right


type ButtonProps = {
  text: string;
  onClick: () => void;
  icon?: ReactNode,
  color?: string;
  size?: number | string;
  mt?: number | string;
	mb?: number | string;
  mr?: number | string;
	ml?: number | string;
  leftIcon?: ReactNode;
  leftIconColor?: string;
	leftIconSize?: number | string;
  rightIcon?: ReactNode;
  rightIconColor?: string;
	rightIconSize?: number | string;
};

export const Button: FC<ButtonProps> = (props) => {
	const { 
    text, onClick, color, 
    size, mt, mb, mr, ml, 
    leftIcon, leftIconColor, 
    leftIconSize, rightIcon, 
    rightIconColor, rightIconSize
  } = props;

  return (
    <button 
      className={styles.button} 
      onClick={onClick}
      style={{
        color: color ?? 'white', 
				fontSize: size ?? '20px',
        marginTop: mt,
        marginBottom: mb,
				marginRight: mr,
				marginLeft: ml,
      }}
    >
      {leftIcon && <Icon icon={leftIcon} color={leftIconColor} size={leftIconSize}/>}
      {text}
      {rightIcon && <Icon icon={rightIcon} color={rightIconColor} size={rightIconSize}/>}
    </button>
  );
};
