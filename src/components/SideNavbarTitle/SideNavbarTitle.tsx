import { FC } from 'react';
import styles from './SideNavbarTitle.module.scss';

type TitleProps = {
	label: string;
  onClick: () => void;
}

export const SideNavbarTitle: FC<TitleProps> = (props) => {
	const { label, onClick } = props;

	return (
		<div className={styles.container} onClick={() => onClick()}>
			<img alt='dino' src='/icons/dinosaur.svg' className={styles.logo}/>
			<label className={styles.label}>
				{label}
			</label>
		</div>
	)
}