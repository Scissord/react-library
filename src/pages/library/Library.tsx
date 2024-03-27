import { FC } from 'react';
import styles from './Library.module.scss';
import { Sidebar, Button, Tabs } from '@components';

const tabs = [
	{ label: 'Главная', content: 'da' },
	{ label: 'Библиотека', content: 'net' },
	{ label: 'Третья', content: 'lol' }
]

export const Library: FC = () => {
	return (
		<div className={styles.container}>
			<Sidebar/>
			<Tabs tabs={tabs}/>
			<Button label="wtf" onClick={(() => alert('da'))}/>
		</div>
	)
}


