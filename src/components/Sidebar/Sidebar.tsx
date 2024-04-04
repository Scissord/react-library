import { FC } from 'react';
import { SideNavbar, SideNavbarLogo } from '@components';
import styles from './Sidebar.module.scss';

// icons
import { IoHomeOutline } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";

const pages = [
	{ label: 'Main', link: '/', icon: <IoHomeOutline /> },
	{ label: 'Library', link: '/library', icon: <IoLibraryOutline /> },
	{ label: 'FAQ', link: '/about', icon: <FaQuestionCircle /> },
]

const components = [
	{ label: 'Box', link: '/box', icon: <FaBoxOpen/> },
	{ label: 'SelectSearch', link: '/select-search', icon: <RiMenuSearchLine/> }
]

export const Sidebar: FC = () => {

	return (
		<div className={styles.container}>
			<SideNavbarLogo label="NCode" onClick={() => alert('you good man')}/>
			<SideNavbar title="Pages" routes={pages}/>
			<SideNavbar title="UI" routes={components}/>
		</div>
	)
}

