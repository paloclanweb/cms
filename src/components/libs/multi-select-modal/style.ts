import { styled } from '@mui/material'
import { Box, type BoxProps } from '@/components'

export const Container = styled(Box)<BoxProps>(() => ({
	padding: '2.4rem',
	overflowY: 'auto'
}))

export const Title = styled(Box)<BoxProps>(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: '2rem',
	fontWeight: 500,
}))

export const Badge = styled(Box)<BoxProps>(({ theme }) => ({
	background: theme.palette.secondary.light,
	color: theme.palette.secondary.main,
	borderRadius: '0.8rem',
	padding: '1.2rem 2.4rem',
	fontSize: '1.6rem',
	display: 'flex',
	alignItems: 'center',
	columnGap: '1.5rem',
	margin: '1.8rem 0',
}))