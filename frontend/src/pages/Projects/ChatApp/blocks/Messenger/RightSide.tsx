import { Section } from '@ui';
import TopReceiver from './TopReceiver';
import Messages from './Messages';

type Props = {}

const RightSide = (props: Props) => {
	return (
		<Section  className='w-3/5'>
			<TopReceiver/>
			<Messages/>
		</Section>
	)
}

export default RightSide