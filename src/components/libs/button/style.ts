import {styled} from '@mui/material/styles'
import {type ButtonProps} from '@/components'
import MuiButton from '@mui/material/Button'

export const Button = styled(MuiButton)<ButtonProps>(({size = 'medium'}) => ({
	...(size === 'small' ? ({
		padding: '0.5rem 1rem',
		fontSize: '1.2rem',
	}) : size === 'medium' ? ({
		padding: '1rem 2rem',
		fontSize: '1.5rem',
	}): size === 'large' && ({
		padding: '1.5rem 2rem',
		fontSize: '2rem',
	}))
}))