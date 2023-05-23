import {type FC, type ReactElement } from 'react'
import type { TypographyProps } from './type'

import MuiTypography from '@mui/material/Typography'

const Typography: FC<TypographyProps> = ({
	textAlign,
	textOverflow,
	textTransform,
	children,
	sx,
	className,
	alignItems,
	justifyContent,
	gap,
	rowGap,
	columnGap,
	...rest
}: TypographyProps): ReactElement => {
	return (
		<MuiTypography
			textAlign={textAlign}
			textOverflow={textOverflow}
			textTransform={textTransform}
			sx={sx}
			className={className}
			gap={gap}
			rowGap={rowGap}
			columnGap={columnGap}
			{...rest}
		>
			{children}
		</MuiTypography>
	)
}

export default Typography