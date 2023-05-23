import { Modal, styled } from '@mui/material'
import type { BoxProps } from '@/components'
import Box from '@/components/libs/box'
import type { ModalProps } from './type'

export const Container = styled(Modal)<ModalProps>(({ noPadding = false }) => ({
	...(!noPadding && {
		padding: '0 2rem',
	})
}))

export const Inner = styled(Box)<BoxProps>(({ theme, width }) => ({
	background: theme.palette.background.paper,
	borderRadius: '0.8rem',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	[theme.breakpoints.down('md')]: {
		width: '100%',
	},
	[theme.breakpoints.up('md')]: {
		width: width || '50%',
	},
	[theme.breakpoints.up('lg')]: {
		width: width || '30%',
	},
	[theme.breakpoints.up('xl')]: {
		width: width || '20%',
	}
}))

export const Header = styled(Box)<BoxProps>(({ theme }) => ({
	background: theme.palette.primary[25],
	color: theme.palette.text.primary,
	fontSize: '2rem',
	padding: '1.8rem 3.2rem',
}))
