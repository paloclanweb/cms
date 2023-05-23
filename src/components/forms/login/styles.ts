import { styled } from '@mui/material'
// import { Link, type LinkProps } from 'react-router-dom'
import { type BoxProps, type ButtonProps, type LinkProps, type TypographyProps} from '@/components'
import Typography from '@/components/libs/typography'
import Box from '@/components/libs/box'
import Button from '@/components/libs/button'
import Link from '@/components/libs/link'

export const Agreement = styled(Link)<LinkProps>(({ theme }) => ({
	display: 'block',
	textAlign: 'center',
	marginTop: '2rem',
	fontSize: '1.4rem',
	color: theme.palette.secondary[500]
}))

export const Submit = styled(Button)<ButtonProps>(() => ({
	padding: '1.5rem 0'
}))

export const ForgotPassword = styled(Link)<LinkProps>(({ theme}) => ({
	color: theme.palette.secondary.main,
	fontSize: '1.4rem',
	letterSpacing: '0.17px'
}))

export const LogoContainer = styled(Box)<BoxProps>(() => ({
	textAlign: 'center',
	margin: '0 auto 1.6rem',
	width: '50%',
}))

export const Title = styled(Typography)<TypographyProps>(() => ({
	fontFamily: '\'Comfortaa\', cursive',
	color: '#58595B',
	fontSize: '1.6rem',
	textAlign: 'right'
}))

export const FormContainer = styled(Box)<BoxProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.neutral.light}`,
	background: theme.palette.background.paper,
	padding: '3.2rem',
	borderRadius: '0.8rem',
	[theme.breakpoints.up('md')]: {
		width: '42.4rem'
	}
}))