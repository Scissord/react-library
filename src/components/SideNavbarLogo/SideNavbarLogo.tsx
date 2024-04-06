import { FC } from 'react';
import styles from './SideNavbarLogo.module.scss';

type SideNavbarLogo = {
	label: string;
  onClick: () => void;
}

export const SideNavbarLogo: FC<SideNavbarLogo> = (props) => {
	const { label, onClick } = props;

	return (
		<div className={styles.container} onClick={onClick}>
			<img alt='bullfinch' src='/logo/logo_dark.svg' className={styles.logo}/>
			<label className={styles.label}>
				{label}
			</label>
		</div>
	)
}
