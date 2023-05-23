import { type FC, type ReactElement } from 'react'
import { IconButton as MuiIconButton, type IconButtonProps } from '@mui/material'

const IconButton: FC<IconButtonProps> = ({ children, sx, style, className, ...rest }: IconButtonProps): ReactElement => {
	return (
		<MuiIconButton sx={sx} style={style} className={className} {...rest}>
			{children}
		</MuiIconButton>
	)
}

export default IconButton