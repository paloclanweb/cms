import {type FC, type ReactElement} from 'react'
import MuiPopover from '@mui/material/Popover'
import type { PopoverProps } from './type'

const Popover: FC<PopoverProps> = ({ children, id, open, anchorEl, onClose, anchorOrigin, sx, className, ...rest }: PopoverProps): ReactElement => {
	return (
		<MuiPopover
			id={id}
			open={open}
			anchorEl={anchorEl}
			onClose={onClose}
			anchorOrigin={anchorOrigin}
			sx={sx}
			className={className}
			{...rest}
		>
			{children}
		</MuiPopover>
	)
}

export default Popover