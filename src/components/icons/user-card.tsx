import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconUserCard: FC<Props> = (props: Props): ReactElement => {
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
				d="M17.625 2H6.375C5.34 2 4.5 2.84 4.5 3.875v16.25C4.5 21.16 5.34 22 6.375 22h11.25c1.035 0 1.875-.84 1.875-1.875V3.875C19.5 2.84 18.66 2 17.625 2Zm-7.5 1.25h3.75c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625h-3.75a.627.627 0 0 1-.625-.625c0-.344.281-.625.625-.625Zm1.875 5c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5a2.502 2.502 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5Zm4.375 9.25c0 .414-.39.75-.875.75h-7c-.484 0-.875-.336-.875-.75v-.75c0-1.242 1.176-2.25 2.625-2.25h.195a4.032 4.032 0 0 0 3.11 0h.195c1.45 0 2.625 1.008 2.625 2.25v.75Z"
			/>
		</svg>
	)
}

export default IconUserCard
