import { FC } from 'react';
import { Button } from '@ui';
import { useNavigate } from '@hooks';
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from './Home.module.scss';

export const Home: FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<section className={styles.left_side}>
				<div className={styles.left_side_title}>
					<img alt='bullfinch' src='/logo/logo_dark.svg' className={styles.logo}/>
					<p>What's up!</p>
					<div className={styles.left_side_name}>
						<span>I'm</span><p className={styles.name}>Scissxrd</p>
					</div>
				</div>

				<div className={styles.welcome}>
					<p>Welcome to my React Library</p>
					<p>with passion for learning</p>
					<p>and creating.</p>
				</div>

				<Button 
					text="to Library"
					onClick={() => navigate('/library')} 
					// leftIcon={<FaArrowAltCircleRight/>}
					rightIcon={<FaArrowAltCircleRight/>}
				/>
			</section>

			<section className={styles.right_side}>
				<img alt='developer' src='/pics/developer.svg' className={styles.developer}/>
			</section>
		</div>
	)
}
