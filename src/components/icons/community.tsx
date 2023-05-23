import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconCommunity: FC<Props> = (props: Props): ReactElement => {
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
				d="M17 23.78c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm14 0c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm1 1h-2c-.55 0-1.047.222-1.41.581a4.571 4.571 0 012.348 3.419H33c.553 0 1-.447 1-1v-1c0-1.103-.897-2-2-2zm-8 0c1.934 0 3.5-1.566 3.5-3.5s-1.566-3.5-3.5-3.5a3.498 3.498 0 00-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5zm2.4 1h-.26c-.65.313-1.371.5-2.14.5a4.933 4.933 0 01-2.14-.5h-.26a3.6 3.6 0 00-3.6 3.6v.9a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-.9a3.6 3.6 0 00-3.6-3.6zm-6.99-.419A1.994 1.994 0 0018 24.78h-2c-1.103 0-2 .897-2 2v1c0 .553.447 1 1 1h2.06a4.583 4.583 0 012.35-3.419z"
			></path>
		</svg>
	)
}

export default IconCommunity
