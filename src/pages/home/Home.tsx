import { FC } from 'react';
import styles from './Home.module.scss';
import { Box } from '@ui';

export const Home: FC = () => {
	return (
		<div className={styles.container}>
			<Box text="da" bg="red"/>
		</div>
	)
}


