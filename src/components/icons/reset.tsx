import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconReset: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="none"
			{...props}
		>
			<path
				fill="#FF5449"
				d="M11 21a9 9 0 0 0 9-9h3l-3.89-3.89-.07-.14L15 12h3c0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7c1.93 0 3.68.79 4.94 2.06l1.42-1.42A8.954 8.954 0 0 0 11 3a9 9 0 0 0 0 18Z"
			/>
		</svg>
	)
}

export default IconReset
