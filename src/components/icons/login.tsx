import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconLogin: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="none"
			{...props}
		>
			<path
				fill="#A3AAB8"
				d="M21.5 18H19V7.545C19 6.693 18.327 6 17.5 6H14v2h3v12h4.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM11.758 4.032l-6 1.554A1.03 1.03 0 0 0 5 6.59V18H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H13V5.037c0-.675-.611-1.17-1.242-1.005ZM10.25 13c-.414 0-.75-.448-.75-1s.336-1 .75-1 .75.448.75 1-.336 1-.75 1Z"
			/>
		</svg>
	)
}

export default IconLogin
