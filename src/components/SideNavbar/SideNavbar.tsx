import { FC, ReactNode } from 'react';
import { Icon } from '@ui';
import { useNavigate } from '@hooks';
import styles from './SideNavbar.module.scss';

// future:
// 1. animation onClick

interface Route {
  label: string;
  link: string;
  icon: ReactNode;
}

type SideNavbarProps = {
	title: string,
	routes: Route[]
}

export const SideNavbar: FC<SideNavbarProps> = (props) => {
	const { title, routes } = props;
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<label className={styles.title}>{title}</label>
			{routes.map((route) => (
				<div 
					key={route.label}
					className={styles.link}
					onClick={() => navigate(route.link)}
				>
					<Icon mr={9} icon={route.icon}/>
					<label className={styles.text}>{route.label}</label>
				</div>
			))}
		</div>
	)
}
