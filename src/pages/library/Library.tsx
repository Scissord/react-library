import { FC, ReactNode, useState } from 'react';
import { firstLibraryColumn, fourthLibraryColumn, secondLibraryColumn, thirdLibraryColumn } from '@constants';
import { UIColumn } from '@components';
import styles from './Library.module.scss';

export const Library: FC = () => {
	const [activeIcon, setActiveIcon] = useState<ReactNode | null>(null);

	return (
		<div className={styles.container}>
			<UIColumn
				components={firstLibraryColumn}
				bg="#00C0EF"
				bgDark="#00A3CB"
				activeIcon={activeIcon}
				setActiveIcon={setActiveIcon}
			/>

			<UIColumn
				components={secondLibraryColumn}
				bg="#00A65A"
				bgDark="#008D4C"
				activeIcon={activeIcon}
				setActiveIcon={setActiveIcon}
			/>

			<UIColumn
				components={thirdLibraryColumn}
				bg="#F39C12"
				bgDark="#CE840F"
				activeIcon={activeIcon}
				setActiveIcon={setActiveIcon}
			/>

			<UIColumn
				components={fourthLibraryColumn}
				bg="#DD4B39"
				bgDark="#BC3F30"
				activeIcon={activeIcon}
				setActiveIcon={setActiveIcon}
			/>
		</div>
	)
}
