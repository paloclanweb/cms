import { styled } from '@mui/material'
import type { BoxProps, TypographyProps } from '@/components'
import Box from '@/components/libs/box'
import Typography from '@/components/libs/typography'

export const Content = styled(Box)<BoxProps>(() => ({
	padding: '2rem 3.2rem' 
}))

export const Text = styled(Typography)<TypographyProps>(() => ({
	marginBottom: '2.6rem',
	fontSize: '1.6rem',
	fontWeight: 400,
	letterSpacing: '0.15px'
}))