import { styled } from '@mui/material'
import { Box, type BoxProps } from '@/components'

export const ToastContainer = styled(Box)<BoxProps>(({ theme }) => ({
	position: 'fixed',
	top: 0,
	right: 0,
	zIndex: 999999,
	'&:not(:first-of-type)': {
		marginTop: '0.8rem'
	}
}))