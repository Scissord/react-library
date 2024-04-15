import { FC } from 'react';
import { Slider } from '@animations';
import styles from './SliderPage.module.scss';

type Props = {}

export const SliderPage: FC = (props: Props) => {
	return (
		<div className={styles.container}>
			<Slider/>
		</div>
	)
}
