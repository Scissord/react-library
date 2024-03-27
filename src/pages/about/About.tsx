import { FC } from 'react';
import styles from './About.module.scss';
import { Sidebar } from '@components';

export const About: FC = () => {
	return (
		<div className={styles.container}>
			<Sidebar/>
		</div>
	)
}
