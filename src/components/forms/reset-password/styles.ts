import { type BoxProps, type ButtonProps, type TypographyProps} from '@/components'
import Box from '@/components/libs/box'
import Typography from '@/components/libs/typography'
import Button from '@/components/libs/button'
import { styled } from '@mui/material'

export const Submit = styled(Button)<ButtonProps>(() => ({
	padding: '1.5rem 0'
}))

export const LogoContainer = styled(Box)<BoxProps>(() => ({
	textAlign: 'center',
	marginBottom: '2rem'
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.neutral.dark,
	fontSize: '2.4rem',
	fontWeight: 400,
	lineHeight: '3.202rem',
	marginBottom: '0.8rem',
	marginTop: '1.2rem'
}))

export const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.neutral.main,
	fontSize: '1.6rem',
	fontWeight: 400,
	lineHeight: '1.875rem',
}))

export const FormContainer = styled(Box)<BoxProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.neutral.light}`,
	background: theme.palette.background.paper,
	padding: '3.2rem',
	borderRadius: '0.8rem',
	[theme.breakpoints.up('md')]: {
		width: '61.8rem'
	}
}))