import { styled } from '@mui/material'
import { Box, Typography, type BoxProps, type TypographyProps } from '@/components'

export const Container = styled(Box)<BoxProps>(() => ({
	textAlign: 'center'
}))

export const ImageContainer = styled(Box)<BoxProps>(() => ({
	marginBottom: '2.5rem'
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: '3.4rem',
	fontWeight: 700,
	lineHeihgt: '4.1rem',
	letterSpacing: '0.25px',
	marginBottom: '2.5rem'
}))

export const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: '2rem',
	fontWeight: 400,
	lineHeihgt: '2.3rem',
	letterSpacing: '0.15px',
	marginBottom: '2.4rem'
}))