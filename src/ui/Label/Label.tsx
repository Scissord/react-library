import { FC } from 'react';
import styles from './Label.module.scss';

type LabelProps = {
	text: string
}

export const Label: FC<LabelProps> = ({ text }) => {

	return (
		<div className={styles.container}>
			<label>{text}</label>
		</div>
	)
}
