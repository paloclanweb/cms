import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconBell: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="none"
			{...props}
		>
			<path
				fill="#008582"
				d="M11.75 22a2.5 2.5 0 0 0 2.499-2.5H9.25A2.5 2.5 0 0 0 11.75 22Zm8.414-5.848c-.755-.811-2.167-2.03-2.167-6.027 0-3.035-2.128-5.465-4.998-6.06V3.25a1.25 1.25 0 1 0-2.498 0v.814c-2.87.596-4.998 3.026-4.998 6.061 0 3.996-1.412 5.216-2.167 6.027A1.22 1.22 0 0 0 3 17c.004.64.507 1.25 1.254 1.25h14.992c.747 0 1.25-.61 1.254-1.25a1.22 1.22 0 0 0-.336-.848Z"
			/>
		</svg>
	)
}

export default IconBell
