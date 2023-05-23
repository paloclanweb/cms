import {type FC, type ReactElement } from 'react'
import { Box } from '@/components'
import type { DataGridActionsProps } from './type'
import {Container, ActionButton} from './style'

const DataGridActions: FC<DataGridActionsProps> = ({  selectedId, anchorEl, setAnchorEl, actions = [] }: DataGridActionsProps): ReactElement => {
	return (
		<Container
			open={Boolean(anchorEl)}
			anchorEl={anchorEl}
			onClose={() => setAnchorEl(null)}
			anchorOrigin={{
				vertical: 'center',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'center',
				horizontal: 'left',
			}}
			sx={{
				'& .MuiPopover-paper': {
					width: '24rem'
				}
			}}
		>
			{actions.map((action, index) => (
				<ActionButton key={index} fullWidth onClick={() => {
					action.onAction(selectedId)
					setAnchorEl(null)
				}}>
					{action.icon}
					<Box>{action.text}</Box>
				</ActionButton>
			))}
		</Container>
	)
}

export default DataGridActions