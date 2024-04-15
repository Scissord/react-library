import { FC } from 'react';
// import styles from './P.module.scss';

type LabelProps = {
	children: string,
	className?: string,
}

export const Label: FC<LabelProps> = ({ children, className }) => {

	return (
		<label className={className}>{ children }</label>
	)
}
