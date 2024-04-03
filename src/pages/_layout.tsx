import { FC, ReactNode } from 'react';
import { Sidebar } from '@components';
import styles from './_layout.module.scss';

type LayoutProps = {
	display: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
	const { display } = props;

	return (
		<div className={styles.container}>
			<Sidebar/>
			{display}
		</div>
	)
}
