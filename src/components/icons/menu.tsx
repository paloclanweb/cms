import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconMenu: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={40}
			height={40}
			fill="none"
			{...props}
		>
			<path
				fill="#fff"
				d="M11.667 17.916v-.52c0-.432.35-.782.78-.782h11.72v-1.562c0-.696.843-1.043 1.333-.553l2.605 2.604c.305.305.305.8 0 1.105L25.5 20.812c-.488.489-1.333.146-1.333-.552v-1.563h-11.72a.781.781 0 0 1-.78-.78Zm15.885 4.948H15.833v-1.562c0-.694-.841-1.045-1.333-.553l-2.604 2.604a.781.781 0 0 0 0 1.105l2.604 2.604c.489.49 1.333.146 1.333-.552v-1.563h11.72c.43 0 .78-.35.78-.78v-.522a.781.781 0 0 0-.78-.78Z"
			/>
		</svg>
	)
}

export default IconMenu
