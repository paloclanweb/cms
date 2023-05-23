import { styled } from '@mui/material'
import { Button, type ButtonProps } from '@/components'

type PageButtonProps = {
    active?: 1 | 0
}

export const PageButton = styled(Button)<ButtonProps & PageButtonProps>(({theme, disabled = false, active = 0}) => ({
	...(active ? ({
		color: theme.palette.primary.main
	}): ({
		color: theme.palette.neutral.main
	})),
	...(disabled ? ({
		'svg': {
			fill: theme.palette.neutral.main
		}
	}): ({
		'svg': {
			fill: theme.palette.primary.main
		}
	}))
}))