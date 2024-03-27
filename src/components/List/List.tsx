import { FC, useState } from 'react';
import styles from './List.module.scss';
import { useNavigate } from '@hooks';

const lists = [
	{ value: 0, label: 'Главная', link: '/' },
	{ value: 1, label: 'Библиотека', link: '/library' },
	{ value: 2, label: 'О себе', link: '/about' },
]

export const List: FC = () => {
  const navigate = useNavigate();
	
	const [active, setActive] = useState<string>('');

  const handleItemClick = (link: string) => {
    navigate(link);
    setActive(link);
  };

	return (
		<div className={styles.container}>
			{lists.map((list, i) => (
				<div 
					key={list.value}
					className={`${styles.list} ${active === list.link ? styles.active : ''}`}
					onClick={() => handleItemClick(list.link)}
				>
					<p>{i + 1}.</p>
					<p>{list.label}</p>
				</div>
			))}
		</div>
	)
}
