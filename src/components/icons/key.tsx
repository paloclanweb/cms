import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconKey: FC<Props> = (props: Props): ReactElement => {
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
				d="M22.75 27.16v6.122l.86 1.29a.469.469 0 00.78 0l.86-1.29V27.16c-.406.075-.823.12-1.25.12-.427 0-.844-.045-1.25-.12zM24 14.78a5.625 5.625 0 100 11.25 5.625 5.625 0 000-11.25zm0 2.969a2.659 2.659 0 00-2.656 2.656.47.47 0 01-.938 0A3.598 3.598 0 0124 16.811a.469.469 0 010 .938z"
			></path>
		</svg>
	)
}

export default IconKey
