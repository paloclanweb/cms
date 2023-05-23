import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconMessage: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={40}
			height={40}
			fill="none"
			viewBox="0 0 48 49"
			{...props}
		>
			<g clipPath="url(#clip0_16100_35221)">
				<path
					fill="#fff"
					d="M32 14.78H16c-1.1 0-1.99.9-1.99 2l-.01 18 4-4h14c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-13 7h10c.55 0 1 .45 1 1s-.45 1-1 1H19c-.55 0-1-.45-1-1s.45-1 1-1zm6 5h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-6H19c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_16100_35221">
					<path
						fill="#fff"
						d="M0 0H24V24H0z"
						transform="translate(12 12.78)"
					></path>
				</clipPath>
			</defs>
		</svg>
	)
}

export default IconMessage
