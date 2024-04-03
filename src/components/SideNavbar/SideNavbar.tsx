import { FC } from 'react';
import { Icon } from '@components';
import { useNavigate } from '@hooks';
 
//icons
import { IoHomeOutline } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

import styles from './SideNavbar.module.scss';

// future:
// 1. animation onClick

const routes = [
	{ label: 'Main', link: '/', icon: <IoHomeOutline /> },
	{ label: 'Library', link: '/library', icon: <IoLibraryOutline /> },
	{ label: 'FAQ', link: '/about', icon: <FaQuestionCircle /> },
]

export const SideNavbar: FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			{routes.map((route) => (
				<div 
					key={route.label}
					className={styles.title}
					onClick={() => navigate(route.link)}
				>
					<Icon mr={9} icon={route.icon}/>
					<text className={styles.text}>{route.label}</text>
				</div>
			))}
		</div>
	)
}
