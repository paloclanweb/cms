import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconPlus: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="none"
			{...props}
		>
			<path fill="#fff" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" />
		</svg>
	)
}

export default IconPlus
