import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconSuccess: FC<Props> = (props: Props): ReactElement => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="52"
		height="52"
		fill="none"
		viewBox="0 0 52 52"
		{...props}
	>
		<rect width="51.5" height="51.5" x="0.25" fill="#E1FFE8" rx="16.5"></rect>
		<path
			fill="#26CC37"
			d="M36.313 25.75a3.543 3.543 0 00-2.3-3.32 3.545 3.545 0 00-4.694-4.692 3.543 3.543 0 00-6.638 0 3.544 3.544 0 00-4.693 4.693 3.543 3.543 0 000 6.638 3.544 3.544 0 004.693 4.693 3.543 3.543 0 006.639 0 3.545 3.545 0 004.693-4.693 3.543 3.543 0 002.3-3.319z"
		></path>
		<path
			fill="#fff"
			d="M30.5 23.968l-5.278 5.236a.443.443 0 01-.626-.003l-3.05-3.074a.443.443 0 01.002-.627l1.049-1.04a.443.443 0 01.626.002l1.698 1.712 3.916-3.884a.443.443 0 01.626.002l1.04 1.049a.443.443 0 01-.002.627z"
		></path>
	</svg>
)

export default IconSuccess
