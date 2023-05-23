import { styled } from '@mui/material'
import { Box, type BoxProps } from '@/components'

export const Loader = styled(Box)<BoxProps>(({ theme }) => ({
	'@keyframes spinner': {
		'0%': {
			transform: 'rotate(0deg)'
		},
		'100%': {
			transform: 'rotate(360deg)'
		}
	},
	margin: 'auto',
	border: `2rem solid ${theme.palette.primary.light}`,
	borderRadius: '100%',
	borderTop: `2rem solid ${theme.palette.primary.main}`,
	width: '5.2rem',
	height: '5.2rem',
	animation: 'spinner 4s linear infinite'
}))