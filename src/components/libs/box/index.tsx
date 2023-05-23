import {type ReactElement, type ForwardedRef, forwardRef } from 'react'
import MuiBox from '@mui/material/Box'
import { type BoxProps } from '@mui/material'

const Box = forwardRef(({ sx, className, children, style, component, ...rest } : BoxProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
	<MuiBox ref={ref} component={component} style={style} sx={sx} className={className} {...rest}>
		{children}
	</MuiBox>
))

Box.displayName = 'Box'

export default Box