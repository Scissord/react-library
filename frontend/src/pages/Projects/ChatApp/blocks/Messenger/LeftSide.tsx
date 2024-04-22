import { Section } from '@ui'
import TopSearch from './TopSearch'
import Conversations from './Conversations'
import BottomLogout from './BottomLogout'

type Props = {}

const LeftSide = (props: Props) => {
	return (
		<Section className='w-2/5 flex flex-col gap-3 px-4 py-4'>
			<TopSearch />
			<Conversations />
			<BottomLogout />
		</Section>
	)
}

export default LeftSide