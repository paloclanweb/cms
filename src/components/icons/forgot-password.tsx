import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconForgotPassword: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="52"
			height="52"
			fill="none"
			viewBox="0 0 52 52"
			{...props}
		>
			<rect width="51.5" height="51.5" x="0.25" fill="#FFEEE1" rx="16.5"></rect>
			<path
				fill="#CC7F26"
				d="M37.458 22.17a7.877 7.877 0 01-9.347 7.74l-1.074 1.209a1.075 1.075 0 01-.803.36h-1.666v1.79c0 .594-.481 1.075-1.075 1.075h-1.79v1.79c0 .593-.48 1.074-1.074 1.074h-5.013c-.593 0-1.074-.48-1.074-1.074V32.64c0-.285.113-.558.314-.76l7.242-7.241a7.878 7.878 0 017.482-10.347 7.861 7.861 0 017.878 7.877zm-7.877-2.15a2.148 2.148 0 104.296 0 2.148 2.148 0 00-4.296 0z"
			></path>
		</svg>
	)
}

export default IconForgotPassword
