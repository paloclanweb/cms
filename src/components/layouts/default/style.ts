import { styled } from '@mui/material/styles'
import {Box, Typography, type BoxProps, type TypographyProps} from '@/components'

export const Container = styled(Box)<BoxProps>(() => ({
	display: 'flex',
	flexWrap: 'wrap'
}))

export const Main = styled(Box)<BoxProps>(() => ({
	position: 'relative',
	padding: '2rem 3.2rem',
	flex: 1,
	height: '100vh',
	overflowY: 'auto'
}))

export const Version = styled(Typography)<TypographyProps>(({ theme }) => ({
	position: 'fixed',
	bottom: '1rem',
	right: '2rem',
	zIndex: 10,
	fontSize: '1rem',
	fontWeight: 400,
	color: theme.palette.grey[400]
}))