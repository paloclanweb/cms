import {type FC, type ReactElement, type MouseEvent, useState, useCallback} from 'react'
import {Input, IconVisibilityOn, IconVisibilityOff, type InputProps} from '@/components'
import {InputAdornment, IconButton} from '@mui/material'

const PasswordInput: FC<InputProps> = ({
	label,
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
	type = 'password',
	...rest }: InputProps): ReactElement => {
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const handleClickShowPassword = useCallback((): void => {
		setShowPassword(!showPassword)
	}, [showPassword])

	const handleMouseDownPassword = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()
	}, [])


	return (
		<Input
			type={showPassword ? 'text' : 'password'}
			value={value}
			defaultValue={defaultValue}
			defaultChecked={defaultChecked}
			variant={variant}
			color={color}
			id={id}
			label={label}
			className={className}
			sx={sx}
			disabled={disabled}
			required={required}
			fullWidth={fullWidth}
			{...rest}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{showPassword ? <IconVisibilityOff /> : <IconVisibilityOn />}
						</IconButton>
					</InputAdornment>
				)
			}}
		/>
	)
}

export default PasswordInput