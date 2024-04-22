import { Box } from '@ui'
import Conversation from './Conversation'

type Props = {}

const Conversations = (props: Props) => {
	return (
		<Box className='flex flex-col gap-1'>
			<Conversation/>
			<Conversation/>
			<Conversation/>
		</Box>
	)
}

export default Conversations