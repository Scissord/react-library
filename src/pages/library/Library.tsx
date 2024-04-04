import { Fragment, FC, ReactNode, useState, useCallback } from 'react';
import { Icon } from '@components';
import { firstLibraryColumn, fourthLibraryColumn, secondLibraryColumn, thirdLibraryColumn } from '@constants';
import { LuChevronDownSquare, LuChevronUpSquare } from "react-icons/lu";
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

interface Component {
	label: string,
	icon: ReactNode
}

type ColumnProps = {
	components: Component[],
	bg: string,
	bgDark: string,
	activeIcon: ReactNode | null,
	setActiveIcon: (icon: ReactNode | null) => void,
}

export const UIColumn: FC<ColumnProps> = ({ components, bg, bgDark, activeIcon, setActiveIcon }) => {
	const handleClick = useCallback((icon: ReactNode) => {
		setActiveIcon(icon === activeIcon ? null : icon);
	}, [activeIcon, setActiveIcon]);

	return (
		<div className={styles.column}>
			{components.map(({ label, icon }) => (
				<Fragment key={label}>
					<div className={styles.card} style={{ backgroundColor: bg }}>
						<section className={styles.top_card}>
							<label className={styles.top_card_label}>{label}</label>
							<Icon color={bgDark} ml="auto" size="6rem" icon={icon}/>
						</section>
						<section className={styles.bottom_card} style={{ backgroundColor: bgDark }}>
							<label>props</label>
							<Icon 
								size="1.2rem"
								onClick={() => handleClick(icon === activeIcon ? null : icon)} 
								icon={icon === activeIcon ? <LuChevronUpSquare /> : <LuChevronDownSquare />}
							/>
						</section>
					</div>
					{icon === activeIcon && (
						<div className={styles.props_card}>
							<label className={styles.props_card_title}>{label}Props</label>
						</div>
					)}
				</Fragment>
			))}
		</div>
	)
}
