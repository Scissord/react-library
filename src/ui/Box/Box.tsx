import { FC } from 'react'

type BoxProps = {
	className?: string,
	bg?: string,
  onClick?: () => void;
	text?: string,
	textClassName?: string,
}

export const Box: FC<BoxProps> = (props) => {
	const { className, bg, onClick, text, textClassName } = props;

	return (
		<div 
			className={className}
			onClick={onClick}
			style={{ 
				backgroundColor: bg,
				width: 'fit-content',
				height: 'fit-content',
			}} 
		>
			<p className={textClassName}>{text}</p>
		</div>
	)
}