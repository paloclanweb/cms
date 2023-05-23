import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconClose: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={28}
			height={28}
			fill="none"
			{...props}
		>
			<path
				fill="#282C34"
				d="m20.933 8.662-1.346-1.346-5.338 5.338-5.337-5.338-1.347 1.346L12.903 14l-5.338 5.338 1.347 1.346 5.337-5.338 5.338 5.338 1.346-1.346L15.596 14l5.337-5.338Z"
			/>
		</svg>
	)
}

export default IconClose
