import { styled } from '@mui/material'
import {
	Box,
	Typography,
	Button,
	type BoxProps,
	type TypographyProps,
	type ButtonProps
} from '@/components'
import type { Filter } from './type'

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: '0.8rem',
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.primary.main,
	fontSize: '2rem',
	fontWeight: 500,
}))

export const Header = styled(Box)<BoxProps>(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.divider}`,
	padding: '1.2rem 2rem',
}))

export const DragContainer = styled(Box)<BoxProps>(({ theme }) => ({
	height: '20rem',
	overflowY: 'auto',
	'&::-webkit-scrollbar': {
		width: '1rem',
		'&-track': {
			background: theme.palette.grey[200],
		},
		'&-thumb': {
			background: theme.palette.grey[400],
			'&:hover': {
				background: theme.palette.grey[500],
			}
		},
	}
}))

export const Type = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.secondary.light,
	fontSize: '1.6rem',
	fontWeight: 400,
}))

export const FilterButton = styled(Button)<ButtonProps & Filter>(({ theme, active = 0 }) => ({
	...(active === 1 ? ({
		color: theme.palette.primary.contrastText,
		background: theme.palette.primary.main,
		borderColor: theme.palette.primary.main,
		'&:hover': {
			color: theme.palette.primary.contrastText,
			background: theme.palette.primary.main,
			borderColor: theme.palette.primary.main,
		}
	}): ({
		background: 'transparent',
		color: theme.palette.neutral.main,
		borderColor: theme.palette.neutral.main,
		'&:hover': {
			background: 'transparent',
			color: theme.palette.neutral.main,
			borderColor: theme.palette.neutral.main,
		}
	}))
}))