import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconLogout: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={32}
			height={32}
			fill="none"
			{...props}
	  >
			<path
		  fill="#C6CAD2"
		  d="M28.667 24H24V7.45c0-1.167-.897-2.117-2-2.117H10c-1.103 0-2 .95-2 2.117V24H3.334a.667.667 0 0 0-.667.667V26c0 .368.298.667.667.667h25.333a.667.667 0 0 0 .667-.667v-1.333a.667.667 0 0 0-.667-.667ZM20 17.333a1.334 1.334 0 1 1 0-2.667 1.334 1.334 0 0 1 0 2.667Z"
			/>
	  </svg>
	)
}

export default IconLogout
