import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconPrevPage: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="24"
			fill="none"
			viewBox="0 0 25 24"
			{...props}
		>
			<path
				fillOpacity="0.54"
				d="M16.205 7.41L14.795 6l-6 6 6 6 1.41-1.41-4.58-4.59 4.58-4.59z"
			></path>
		</svg>
	)
}

export default IconPrevPage
