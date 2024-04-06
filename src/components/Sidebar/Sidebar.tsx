import { FC } from 'react';
import { SideNavbar, SideNavbarLogo } from '@components';
import { useNavigate } from '@hooks';
import { components, pages } from '@constants';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<SideNavbarLogo label="NCode" onClick={() => navigate('/')}/>
			<SideNavbar title="Pages" routes={pages}/>
			<SideNavbar title="UI" routes={components}/>
		</div>
	)
}

