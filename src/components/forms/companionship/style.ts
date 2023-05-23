import { styled } from '@mui/material'
import { type BoxProps } from '@/components'
import Box from '@/components/libs/box'

export const Form = styled(Box)<BoxProps>(() => ({
	padding: '2.3rem 3.2rem'
}))

export const Badge = styled(Box)<BoxProps>(({ theme }) => ({
	background: theme.palette.secondary.light,
	color: theme.palette.secondary.main,
	fontSize: '1.6rem',
	padding: '1.2rem 1.8rem',
	borderRadius: '0.8rem',
	marginBottom: '2rem'
}))