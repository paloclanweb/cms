import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconMore: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="24"
			fill="none"
			viewBox="0 0 25 24"
		>
			<path
				fill="#929AAB"
				d="M12.5 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
			></path>
		</svg>
	)
}

export default IconMore
