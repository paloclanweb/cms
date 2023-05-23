import { type FC, type ReactElement } from 'react'
import MuiButtonGroup from '@mui/material/ButtonGroup'
import type { ButtonGroupProps } from './type'

const ButtonGroup: FC<ButtonGroupProps> = ({ children, sx, style, classes, className, color, variant, ...rest }: ButtonGroupProps): ReactElement => {
	return (
		<MuiButtonGroup
			sx={sx}
			style={style}
			classes={classes}
			className={className}
			color={color}
			variant={variant}
			{...rest}
		>
			{children}
		</MuiButtonGroup>
	)
}

export default ButtonGroup