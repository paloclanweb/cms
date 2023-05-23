import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconCompanies: FC<Props> = (props: Props): ReactElement => {
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
				d="M19 33.53h10V17.905c0-1.035-.84-1.875-1.875-1.875h-6.25c-1.035 0-1.875.84-1.875 1.875V33.53zm2.5-15h5v1.25h-5v-1.25zM34 21.655v10c0 1.035-.84 1.875-1.875 1.875H30.25V19.78h1.875c1.035 0 1.875.84 1.875 1.875zM17.75 33.53h-1.875A1.875 1.875 0 0114 31.655v-10c0-1.035.84-1.875 1.875-1.875h1.875v13.75z"
			></path>
		</svg>
	)
}

export default IconCompanies
