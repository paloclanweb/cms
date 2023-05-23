import {styled} from '@mui/material/styles'
import {Box, Button, type InputProps, type BoxProps, type ButtonProps} from '@/components'
import Input from '@/components/libs/input'

export const SearchContainer = styled(Box)<BoxProps>(() => ({
	padding: '1.2rem 2rem'
}))

export const SearchInner = styled(Box)<BoxProps>(() => ({
	position: 'relative',
}))

export const SearchInput = styled(Input)<InputProps>(({ theme }) => ({
	margin: 0,
	'.MuiOutlinedInput-root': {
		borderRadius: '0.8rem',
		'.MuiOutlinedInput-notchedOutline': {
			borderColor: theme.palette.neutral[400]
		}
	}
}))


export const SearchButton = styled(Button)<ButtonProps>(() => ({
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	right: 0,
	height: '100%',
}))
