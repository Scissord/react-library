import { FC } from 'react';
import { Box } from '@ui';

import styles from './Home.module.scss';

export const Home: FC = () => {
	return (
		<div className={styles.container}>
			<p className={styles.text}>Hello, I'm Nur, Welcome to my React Library!</p>
			{/* <Box text="da" bg="red"/> */}
		</div>
	)
}


