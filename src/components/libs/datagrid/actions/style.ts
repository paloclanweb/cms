import { styled } from '@mui/material'
import { Button, type PopoverProps, type ButtonProps } from '@/components'
import Popover from '@/components/libs/popover'

export const Container = styled(Popover)<PopoverProps>(() => ({
	'.MuiPopover-paper': {
		borderRadius: '0.8rem',
	}
}))

export const ActionButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: '#434956',
	fontWeight: 400,
	justifyContent: 'flex-start',
	textAlign: 'left',
	borderRadius: 0,
	fontSize: '1.6rem',
	padding: '1.05rem',
	columnGap: '1rem',
	'&:hover': {
		background: theme.palette.primary[25],
	}
}))