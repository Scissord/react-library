import { FC, ReactNode } from 'react';
import styles from './Icon.module.scss';

// icon - react-icons
// color - black, white, #5F58CC
// className	{styles.a}	
// size	1em	
// mr margin-right

type IconProps = {
	icon: ReactNode,
	color?: string;
	size?: number | string;
	mr?: number | string;
	ml?: number | string;
}

export const Icon: FC<IconProps> = (props) => {
	const { icon, color, size, mr, ml } = props;

	return (
		<div 
			className={styles.container} 
			style={{ 
				color: color ?? 'white', 
				fontSize: size ?? '1em',
				marginRight: mr,
				marginLeft: ml
			}}
		>
			{icon}
		</div>
	)
}
