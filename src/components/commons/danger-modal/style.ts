import { styled } from '@mui/material'
import Box from '@/components/libs/box'
import Typography from '@/components/libs/typography'
import type { BoxProps, TypographyProps } from '@/components'

export const Content = styled(Box)<BoxProps>(() => ({
	padding: '2rem 3.2rem',
}))

export const Text = styled(Typography)<TypographyProps>(() => ({
	fontSize: '1.6rem',
	letterSpacing: '0.15px',
	marginBottom: '2.6rem'
}))

export const Strong = styled(Typography)<TypographyProps>(() => ({
	fontSize: '1.6rem',
	letterSpacing: '0.15px'
}))