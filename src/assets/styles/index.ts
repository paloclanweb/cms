import { styled } from '@mui/material'
import { Box, type BoxProps } from '@/components'

type BadgeProps = {
    active?: 0 | 1,
    locked?: 0 | 1
} & BoxProps

export const Badge = styled(Box)<BadgeProps>(({ theme, active = 0, locked = 0 }) => ({
	padding: '0.7rem 1rem',
	borderRadius: '1.6rem',
	border: '1px solid',
	textAlign: 'center',
	fontSize: '1.3rem',
	letterSpacing: '0.16px',
	display: 'inline-flex',
	...(locked === 1 ? ({
		borderColor: theme.palette.error.main,
		background: theme.palette.error.main,
		color: theme.palette.error.contrastText,
	}): active === 1 ? ({
		borderColor: theme.palette.primary.light, 
		background: theme.palette.primary.light,
		color: theme.palette.primary.contrastText,
	}): ({
		borderColor: theme.palette.divider,
		color: theme.palette.neutral[900],
	}))
}))

export const Tip = styled(Box)<BoxProps>(({ theme }) => ({
	background: theme.palette.secondary.light,
	color: theme.palette.secondary.main,
	fontSize: '1.6rem',
	padding: '1.2rem 1.8rem',
	borderRadius: '0.8rem',
	marginBottom: '3rem'
}))