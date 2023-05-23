import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconDot: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={40}
			height={40}
			fill="none"
			viewBox="0 0 48 49"
			{...props}
		>
			<path
				fill="#fff"
				d="M24 20.748a4.03 4.03 0 014.032 4.032A4.03 4.03 0 0124 28.812a4.03 4.03 0 01-4.032-4.032A4.03 4.03 0 0124 20.748zm0-.968a5 5 0 100 10 5 5 0 000-10zm0 3.387a1.613 1.613 0 100 3.226 1.613 1.613 0 000-3.226z"
			></path>
		</svg>
	)
}

export default IconDot
