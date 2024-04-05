import { FC } from 'react'
import styles from './Box.module.scss'

type BoxProps = {
	bg?: string,
  onClick?: () => void;
	text?: string
}

export const Box: FC<BoxProps> = (props) => {
	const { bg, onClick, text } = props;

	return (
		<div 
			style={{ backgroundColor: bg }} 
			onClick={onClick}
			className={styles.container}
		>
			{text}
		</div>
	)
}