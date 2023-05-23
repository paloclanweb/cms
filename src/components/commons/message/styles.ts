import {styled} from '@mui/material/styles'
import Button from '@/components/libs/button'
import {Box, BoxProps, ButtonProps, Typography, TypographyProps} from '@/components'

export const BackButton = styled(Button)<ButtonProps>(() => ({
	padding: '1.5rem 0'
}))

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.neutral.light}`,
	background: theme.palette.background.paper,
	padding: '3.2rem',
	borderRadius: '0.8rem',
	[theme.breakpoints.up('md')]: {
		width: '44rem'
	}
}))

export const LogoContainer = styled(Box)<BoxProps>(() => ({
	textAlign: 'center',
	marginBottom: '2rem'
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.grey[900],
	fontSize: '2.4rem',
	fontWeight: 400,
	lineHeight: '2.4rem',
	marginTop: '1.2rem',
	marginBottom: '0.8rem',
}))

export const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.grey[500],
	fontSize: '1.6rem',
	lineHeight: '1.875rem',
}))