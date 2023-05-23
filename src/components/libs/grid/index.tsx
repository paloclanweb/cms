import {type FC, type ReactElement } from 'react'
import type {GridProps} from './type'
import { Grid as MuiGrid } from '@mui/material'

const Grid: FC<GridProps> = ({
	children,
	container,
	item,
	spacing,
	xs,
	sm,
	md,
	lg,
	xl,
	sx,
	className,
	alignItems,
	justifyContent,
	gap,
	rowGap,
	columnGap,
	...rest
}: GridProps): ReactElement => {
	return (
		<MuiGrid
			container={container}
			item={item}
			spacing={spacing}
			xs={xs}
			sm={sm}
			md={md}
			lg={lg}
			xl={xl}
			sx={sx}
			className={className}
			alignItems={alignItems}
			justifyContent={justifyContent}
			gap={gap}
			rowGap={rowGap}
			columnGap={columnGap}
			{...rest}
		>
			{children}
		</MuiGrid>
	)
}

export default Grid