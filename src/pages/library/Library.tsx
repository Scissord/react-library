import { FC, ReactNode, useState } from 'react';
import { firstUiColumn, fourthUiColumn, secondUiColumn, thirdUiColumn } from '@constants';
import { UIColumn } from '@components';
import styles from './Library.module.scss';

export const Library: FC = () => {
	const [activeIcon, setActiveIcon] = useState<ReactNode | null>(null);

	return (
		<div className={styles.container}>
			<UIColumn
				components={firstUiColumn}
				bg="#00C0EF"
				bgDark="#00A3CB"
				activeIcon={activeIcon}
				setActiveIcon={setActiveIcon}
			/>

			<UIColumn
				components={fourthUiColumn}
				bg="#00A65A"
				bgDark="#008D4C"
				activeIcon={activeIcon}
				setActiveIcon={setActiveIcon}
			/>

			<UIColumn
				components={secondUiColumn}
				bg="#F39C12"
				bgDark="#CE840F"
				activeIcon={activeIcon}
				setActiveIcon={setActiveIcon}
			/>

			<UIColumn
				components={thirdUiColumn}
				bg="#DD4B39"
				bgDark="#BC3F30"
				activeIcon={activeIcon}
				setActiveIcon={setActiveIcon}
			/>
		</div>
	)
}
