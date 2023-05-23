import {forwardRef, ForwardedRef} from 'react'
import type {InputProps} from './type'
import MuiTextField from '@mui/material/TextField'

const Input = forwardRef(({
	label,
	type,
	className,
	id,
	color,
	variant,
	defaultChecked,
	value,
	defaultValue,
	sx,
	disabled,
	required,
	fullWidth,
	...rest
}: InputProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<MuiTextField
			ref={ref}
			value={value}
			defaultValue={defaultValue}
			defaultChecked={defaultChecked}
			variant={variant}
			color={color}
			id={id}
			label={label}
			type={type}
			className={className}
			sx={sx}
			disabled={disabled}
			required={required}
			fullWidth={fullWidth}
			{...rest}
		/>
	)
})

Input.displayName = 'Input'
export default Input