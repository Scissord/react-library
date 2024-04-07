import { FC } from 'react'
import { Open } from '@animations';
import styles from './OpenPage.module.scss';

type Props = {}

export const OpenPage: FC = (props: Props) => {
	return (
		<div className={styles.container}>
			<Open/>	
		</div>
	)
}
