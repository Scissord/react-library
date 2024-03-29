import { FC } from 'react';
import styles from './SideNavbar.module.scss';

// future:
// 1. animation onClick

const routes = [
	{ label: 'Главная', link: '/' },
	{ label: 'Библиотека', link: '/library' },
	{ label: 'О себе', link: '/about' },
]

export const SideNavbar: FC = () => {


	return (
		<ul className={styles.container}>
			{routes.map((route, i) => (
				<li 
					key={route.label}
					className={styles.li}
				>
					<a href={route.link} className={styles.text}>{i + 1}. <span className={styles.label}>{route.label}</span></a>
				</li>
			))}
		</ul>
	)
}
