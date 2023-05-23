import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconCompanionship: FC<Props> = (props: Props): ReactElement => {
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
				d="M29.25 22.78H24.5v1.75c0 1.24-1.009 2.25-2.25 2.25-1.24 0-2.25-1.01-2.25-2.25v-3.8l-2.027 1.219A1.996 1.996 0 0017 23.66v1.478l-2.5 1.444a.998.998 0 00-.366 1.366l2.5 4.331a1 1 0 001.366.366l3.23-1.866h4.27c1.103 0 2-.897 2-2h.5c.553 0 1-.447 1-1v-2h.25c.415 0 .75-.334.75-.75v-1.5a.748.748 0 00-.75-.75zm4.616-1.169l-2.5-4.331a1 1 0 00-1.365-.366l-3.232 1.866h-3.193c-.375 0-.74.106-1.06.303l-1.047.653a.993.993 0 00-.468.847v3.947a1.25 1.25 0 102.5 0v-2.75h5.75c.965 0 1.75.784 1.75 1.75v.89l2.5-1.443c.478-.278.64-.888.365-1.366z"
			></path>
		</svg>
	)
}

export default IconCompanionship
