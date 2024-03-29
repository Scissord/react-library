import { FC, ReactNode } from 'react';

type LayoutProps = {
	display: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
	const { display } = props;

	return (
		<>
			{display}
		</>
	)
}
