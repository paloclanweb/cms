import { styled } from '@mui/material'
import { Typography, Box, type BoxProps, type TypographyProps } from '@/components'

export const Content = styled(Box)<BoxProps>(() => ({
	padding: '2.6rem'
}))

export const Endpoint = styled(Typography)<TypographyProps>(() => ({
	fontSize: '1.6rem',
	marginBottom: '2rem'
}))