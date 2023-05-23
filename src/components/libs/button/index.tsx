import { type ReactElement, forwardRef, ForwardedRef } from 'react'
import type { ButtonProps } from './type'
import { Button as MuiButton } from './style'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
	type,
	className,
	children,
	onClick,
	onFocus,
	onChange,
	color,
	variant,
	size,
	disabled,
	...rest
}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): ReactElement => {
	return (
		<MuiButton
			ref={ref}
			{...rest}
			type={type}
			className={className}
			onClick={onClick}
			onFocus={onFocus}
			onChange={onChange}
			color={color}
			variant={variant}
			size={size}
			disabled={disabled}
		>
			{children}
		</MuiButton>
	)
})

Button.displayName = 'Button'

export default Button