import { FC } from 'react'
import { List } from '@animations';
import styles from './ListPage.module.scss';

export const ListPage: FC = () => {
	return (
		<div className={styles.container}>
			<List/>	
		</div>
	)
}
