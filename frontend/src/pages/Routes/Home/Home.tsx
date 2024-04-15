import { FC } from 'react';
import { Button, Box, Section, Img, Span, P } from '@ui';
import { useNavigate } from '@hooks';
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from './Home.module.scss';

export const Home: FC = () => {
	const navigate = useNavigate();

	return (
		<Box className={styles.container}>
			<Section className={styles.left_side}>
				<Box className={styles.left_side_title}>
					<Img 
						alt='bullfinch' 
						src='/logo/logo_dark.svg' 
						className={styles.logo}
					/>
					<P>What's up!</P>
					<Box className={styles.left_side_name}>
						<Span>I'm</Span><P className={styles.name}>Scissxrd</P>
					</Box>
				</Box>

				<Box className={styles.welcome}>
					<P>Welcome to my React library,</P>
					<P>with passion for learning</P>
					<P>and creating.</P>
				</Box>

				<Button 
					text="to Library"
					onClick={() => navigate('/library')} 
					rightIcon={<FaArrowAltCircleRight/>}
				/>
			</Section>

			<Section className={styles.right_side}>
				<Img 
					alt='developer' 
					src='/pics/developer.svg' 
					className={styles.developer}
				/>
			</Section>
		</Box>
	)
}
