import { styled } from '@mui/material'
import { Box, Button, Typography, Modal as MuiModal, type ModalProps, type TypographyProps, type ButtonProps, type BoxProps } from '@/components'

type Props = {
    active?: 1 | 0
}

export const Modal = styled(MuiModal)<ModalProps>(({ theme }) => ({
	borderRadius: '0.8rem',
	'&:focus': {
		outline: 'none !important',
	}
}))

export const ModalInner = styled(Box)<BoxProps>(() => ({
	padding: '2rem 3.2rem'
}))

export const ButtonContainer = styled(Box)<BoxProps>(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	position: 'relative',
	padding: '2rem 0',
	marginBottom: '2rem',
	'&:before': {
		zIndex: -1,
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '80%',
		height: '1px',
		backgroundColor: theme.palette.neutral[300],
	}
}))

export const PageButton = styled(Button)<ButtonProps & Props>(({ theme, active = 0 }) => ({
	fontSize: '2rem',
	borderRadius: '100%',
	border: '1px solid',
	width: '4rem',
	height: '4rem',
	minWidth: 'auto',
	background: theme.palette.common.white,
	transition: 'all ease 0.2s',
	...(active ? ({
		color: theme.palette.primary.main,
		borderColor: theme.palette.primary.main
	}): ({
		color: theme.palette.neutral[300],
		borderColor: theme.palette.neutral[300]
	})),
	'&:hover': {
		backgorund: theme.palette.common.white,
		color: theme.palette.primary.main,
		borderColor: theme.palette.primary.main
	}
}))

export const Content = styled(Box)<BoxProps>(({ theme }) => ({
	overflowY: 'auto',
	height: '30rem',
	marginBottom: '2rem',
	outline: 'none',
	border: `1px solid ${theme.palette.divider}`,
	'&::-webkit-scrollbar': {
		width: '0.6rem',
		backgroundColor: theme.palette.neutral[50],
		'&-track': {
			webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
			borderRadius: '1rem',
			backgroundColor: theme.palette.grey[100]
		},
		'&-thumb': {
			borderRadius: '1rem',
			webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
			backgroundColor: theme.palette.neutral[300],
		}
	}
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: '2.4rem',
	marginBottom: '2rem',
	textAlign: 'center'
}))