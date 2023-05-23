import { styled } from '@mui/material'
import { Box, Typography, Button, type ButtonProps, type TypographyProps, type BoxProps } from '@/components'

export const Content = styled(Box)<BoxProps>(({ theme }) => ({
	background: theme.palette.common.white,
	padding: '2rem 2.4rem',
}))

export const Menu = styled(Box)<BoxProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: '1.2rem',
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.neutral[900],
	fontSize: '1.6rem',
	letterSpacing: '0.15px',
	marginRight: '2.4rem'
}))

export const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
	color: theme.palette.neutral[600],
	fontSize: '1.4rem',
	letterSpacing: '0.17px'
}))

export const VisibleButton = styled(Button)<ButtonProps>(({ theme }) => ({
	minWidth: 'auto',
	borderRight: `1px solid ${theme.palette.divider}`,
	borderRadius: 0
}))

export const ToggleButton = styled(Button)<ButtonProps>(({ theme }) => ({

}))

export const ActionButton = styled(Button)<ButtonProps>(({ theme }) => ({

}))