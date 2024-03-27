import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { Title, List } from '@components';

export const Sidebar: FC = () => {

	return (
		<div className={styles.container}>
			<Title label="NCode" onClick={() => alert('you good man')}/>
			<List />
		</div>
	)
}

