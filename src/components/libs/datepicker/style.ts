import { styled } from '@mui/material'
import type { BoxProps, ButtonProps, TypographyProps } from '@/components'
import type { DayProps } from './type'
import Typography from '@/components/libs/typography'
import Box from '@/components/libs/box'
import Button from '@/components/libs/button'

export const Container = styled(Box)<BoxProps>(() => ({
	position: 'relative',
}))

export const DropdownContainer = styled(Box)<BoxProps>(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.divider}`,
	borderBottom: `1px solid ${theme.palette.divider}`,
	marginBottom: '2rem',
}))

export const Weeks = styled(Box)<BoxProps>(({ theme }) => ({
	width: '12rem',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	padding: '0.6rem 0.8rem',
	gap: '0.8rem',
	borderRight: `1px solid ${theme.palette.divider}`,
}))

export const Week = styled(Button)<ButtonProps>(({ theme }) => ({
	fontSize: '1.6rem',
	fontWeight: 400,
	color: theme.palette.neutral.dark,
}))

export const CurrentDateContainer = styled(Box)<BoxProps>(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.divider}`,
}))

export const CurrentDate = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.neutral.main,
	fontSize: '1.6rem',
	fontWeight: 600,
}))

export const Days = styled(Typography)<TypographyProps>(() => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(7, auto)',
	gap: '0.5rem',
	padding: '1.8rem 1.9rem'
}))

export const Day = styled(Box)<BoxProps & DayProps>(({ theme, selected = false, passive = false }) => ({
	fontSize: '1.5rem',
	fontWeight: 500,
	width: '3rem',
	height: '3rem',
	borderRadius: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	...(selected ? {
		bacgkround: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	}: passive ? {
		color: theme.palette.neutral.light,
	} :{
		color: theme.palette.neutral.dark,
	}),
	'&:nth-child(-n+8)': {
		color: theme.palette.neutral.light,
	},
	...(!passive && {
		'&:not(:nth-child(-n+8)):hover': {
			background: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
			cursor: 'pointer',
			transition: 'all ease 0.5s',
		},
	})
}))