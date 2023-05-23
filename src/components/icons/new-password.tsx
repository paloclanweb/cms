import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconNewPassword: FC<Props> = (props: Props): ReactElement => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="52"
		height="52"
		fill="none"
		viewBox="0 0 52 52"
		{...props}
	>
		<rect width="51.5" height="51.5" x="0.25" fill="#EAFBFA" rx="16.5"></rect>
		<path
			fill="#008582"
			d="M36.384 29.26l-6.085-3.51 6.085-3.51a.716.716 0 00.262-.979l-1.433-2.48a.717.717 0 00-.98-.263l-6.083 3.51v-7.02a.716.716 0 00-.717-.716h-2.866a.716.716 0 00-.717.716v7.02l-6.084-3.51a.717.717 0 00-.979.262l-1.433 2.481a.716.716 0 00.262.979l6.084 3.51-6.084 3.51a.716.716 0 00-.262.979l1.433 2.48c.198.343.636.46.979.263l6.084-3.51v7.02c0 .396.321.716.717.716h2.866c.396 0 .717-.32.717-.716v-7.02l6.084 3.51c.343.197.78.08.979-.263l1.433-2.48a.716.716 0 00-.262-.979z"
		></path>
	</svg>
)

export default IconNewPassword
