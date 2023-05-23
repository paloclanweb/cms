import { styled } from '@mui/material'
import { type BoxProps, type ButtonProps } from '@/components'
import type { DataGridContainerProps } from './type'
import Box from '@/components/libs/box'
import Button from '@/components/libs/button'

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
	background: theme.palette.background.paper,
	borderRadius: '8px',
}))

export const Header = styled(Box)<BoxProps>(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.divider}`,
	padding: '1.6rem 2rem'
}))

export const DataGridContainer = styled(Box)<DataGridContainerProps>(({ theme, column = 0}) => ({
	display: 'grid',
	gridTemplateColumns: `repeat(${column - 1}, minmax(auto, 22rem)) min-content`,
	alignItems: 'center',
	overflowX: 'auto',
	'&::-webkit-scrollbar': {
		width: '1rem',
		height: '0.5rem'
	},
	'&::-webkit-scrollbar-track': {
		background: theme.palette.grey['100']
	},
	'&::-webkit-scrollbar-thumb': {
		background: theme.palette.grey['500'],
		'&:hover': {
			background: theme.palette.grey['800']
		}
	}
}))

export const GridHeader = styled(Box)<BoxProps>(({ theme }) => ({
	fontSize: 14,
	fontWeight: 400,
	color: theme.palette.neutral[900],
	padding: '1rem 2rem',
	whiteSpace: 'nowrap',
	borderBottom: `1px solid ${theme.palette.divider}`,
	'&:nth-of-type(6)': {
		textAlign: 'center'
	}
}))

export const GridContent = styled(Box)<BoxProps>(({ theme }) => ({
	color: theme.palette.neutral[600],
	fontSize: 14,
	fontWeight: 400,
	padding: '1rem 2rem',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	whiteSpace: 'nowrap'
}))

export const GridActionButton = styled(Button)<ButtonProps>(() => ({
	padding: 0,
	height: '100%',
}))
