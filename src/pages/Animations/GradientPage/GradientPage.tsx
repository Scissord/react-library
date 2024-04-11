import { FC } from 'react'
import { Gradient } from '@animations';
import styles from './GradientPage.module.scss';

export const GradientPage: FC = () => {
	return (
		<div className={styles.container}>
			<Gradient/>	
		</div>
	)
}
