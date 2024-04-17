import { Box, Button } from "@ui"

export const ChatApp = () => {

	return (
		<Box className="mt-3 flex gap-6">
			<Button text="dada" className="btn btn-outline btn-info" onClick={() => console.log('da')}/>
			<Button text="dada" className="btn btn-outline btn-success" onClick={() => console.log('da')}/>
			<Button text="dada" className="btn btn-outline btn-warning" onClick={() => console.log('da')}/>
			<Button text="dada" className="btn btn-outline btn-error" onClick={() => console.log('da')}/>
		</Box>
	)
}