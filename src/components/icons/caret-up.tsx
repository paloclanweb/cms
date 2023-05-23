import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconCaretUp: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={48}
			height={48}
			fill="none"
			{...props}
		>
			<path d="M41.305 35.343H6.695c-2.396 0-3.596-2.898-1.902-4.592l17.305-17.305a2.69 2.69 0 0 1 3.804 0l17.305 17.305c1.694 1.694.494 4.592-1.902 4.592Z" />
		</svg>
	)
}

export default IconCaretUp
