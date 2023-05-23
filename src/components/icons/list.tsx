import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconList: FC<Props> = (props: Props): ReactElement => {
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
				d="M3.875 16.5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm0-6.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm0-6.25a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm17.5.938h-12.5a.625.625 0 0 0-.625.625v.625a.625.625 0 0 0 .625.625h12.5A.625.625 0 0 0 22 6.188v-.625a.625.625 0 0 0-.625-.625Zm0 6.25h-12.5a.625.625 0 0 0-.625.624v.626a.625.625 0 0 0 .625.624h12.5a.624.624 0 0 0 .625-.624v-.626a.624.624 0 0 0-.625-.624Zm0 6.25h-12.5a.625.625 0 0 0-.625.625v.625a.625.625 0 0 0 .625.625h12.5a.624.624 0 0 0 .625-.625v-.625a.624.624 0 0 0-.625-.625Z"
			/>
		</svg>
	)
}

export default IconList
