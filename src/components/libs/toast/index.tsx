import {type FC, type ReactElement} from 'react'
import {Snackbar, Alert} from '@mui/material'
import type {ToastProps} from './type'
import {ToastContainer} from './style'

const Toast: FC<ToastProps> = ({
	message = '',
	status = 'success',
	open = false,
	onClose = () => undefined
}): ReactElement => {
	return (
		<ToastContainer>
			<Snackbar
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={open}
				autoHideDuration={6000}
				onClose={onClose}>
				<Alert severity={status} sx={{width: '100%'}} onClose={onClose}>
					{message}
				</Alert>
			</Snackbar>
		</ToastContainer>

	)
}

export default Toast