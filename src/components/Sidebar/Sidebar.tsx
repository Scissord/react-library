import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { SideNavbar, SideNavbarTitle } from '@components';

export const Sidebar: FC = () => {

	return (
		<div className={styles.container}>
			<SideNavbarTitle label="NCode" onClick={() => alert('you good man')}/>
			<SideNavbar />
		</div>
	)
}

