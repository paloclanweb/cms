import {styled} from '@mui/material/styles'
import {Box, Typography, type TypographyProps, type BoxProps} from '@/components'

export const Container = styled(Box)<BoxProps>(({theme}) => ({
	background: theme.palette.background.paper,
	borderRadius: '0.4rem',
	marginBottom: '2rem',
	[theme.breakpoints.down('md')]: {
		padding: '2.4rem 1.8rem'
	},
	[theme.breakpoints.up('md')]: {
		padding: '2.4rem 4.8rem'
	}
}))

export const Title = styled(Typography)<TypographyProps>(() => ({
	fontSize: '2rem',
	fontWeight: 500
}))

export const FullName = styled(Typography)<TypographyProps>(() => ({
	fontSize: '2rem',
	fontWeight: 500
}))

export const Email = styled(Typography)<TypographyProps>(({theme}) => ({
	fontSize: '1.6rem',
	fontWeight: 400,
	color: theme.palette.grey['400']
}))