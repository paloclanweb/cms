import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconCaretDown: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={48}
			height={48}
			fill="none"
			{...props}
		>
			<path d="M6.691 12.655H41.31c2.394 0 3.592 2.893 1.897 4.588L25.904 34.558a2.696 2.696 0 0 1-3.808 0L4.794 17.243c-1.695-1.695-.497-4.588 1.897-4.588Z" />
		</svg>
	)
}

export default IconCaretDown
