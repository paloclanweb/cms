import { type BoxProps, type TypographyProps } from '@/components'
import Box from '@/components/libs/box'
import Typography from '@/components/libs/typography'
import { styled } from '@mui/material'

export const Section = styled(Box)<BoxProps>(() => ({
	height: '100vh',
	display: 'grid',
	placeItems: 'center'
}))

export const BackgroundContainer = styled(Box)<BoxProps>(() => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: -1,
}))

export const Version = styled(Typography)<TypographyProps>(({ theme }) => ({
	position: 'fixed',
	bottom: '1rem',
	right: '1rem',
	zIndex: 10,
	fontSize: '1rem',
	fontWeight: 400,
	color: theme.palette.grey[400]
}))