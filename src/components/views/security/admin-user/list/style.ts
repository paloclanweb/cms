import { styled } from '@mui/material'
import { Box, type BoxProps } from '@/components'
import type { BadgeProps } from './type'

export const Badge = styled(Box)<BoxProps & BadgeProps>(({ theme, active = 0, locked = 0 }) => ({
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