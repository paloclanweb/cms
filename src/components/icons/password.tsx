import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconPassword: FC<Props> = (props: Props): ReactElement => {
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
				d="M21 9.188a6.187 6.187 0 0 1-7.342 6.08l-.844.949a.844.844 0 0 1-.63.283h-1.309v1.406a.844.844 0 0 1-.844.844H8.625v1.406a.844.844 0 0 1-.844.844H3.844A.844.844 0 0 1 3 20.156v-2.744c0-.224.089-.438.247-.597l5.688-5.688A6.188 6.188 0 0 1 14.812 3 6.175 6.175 0 0 1 21 9.188ZM14.812 7.5a1.687 1.687 0 1 0 3.375 0 1.687 1.687 0 0 0-3.375 0Z"
			/>
		</svg>
	)
}

export default IconPassword
