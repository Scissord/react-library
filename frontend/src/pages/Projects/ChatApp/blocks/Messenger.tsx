import { Box, Section } from '@ui';
import LeftSide from './Messenger/LeftSide';
import RightSide from './Messenger/RightSide';


const Messenger = (props: Props) => {
	return (
		<Box className='flex w-[700px] rounded-lg overflow-hidden border'>
			<LeftSide/>
			<RightSide/>
		</Box>
	);
};

export default Messenger