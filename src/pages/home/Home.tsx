import { FC } from 'react';
import styles from './Home.module.scss';
import { Sidebar, Button, Tabs } from '@components';

const tabs = [
	{ label: 'Главная', content: 'da' },
	{ label: 'Библиотека', content: 'net' },
	{ label: 'Третья', content: 'lol' }
]

export const Home: FC = () => {
	return (
		<div className={styles.container}>
			<Sidebar />
			
			<Tabs tabs={tabs}/>
			<Button label="wtf" onClick={(() => alert('da'))}/>
		</div>
	)
}


