import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconUsers: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			{...props}
	  >
			<path
		  d="M8 12c1.934 0 3.5-1.566 3.5-3.5S9.934 5 8 5a3.498 3.498 0 0 0-3.5 3.5C4.5 10.434 6.066 12 8 12Zm2.4 1h-.26c-.65.313-1.371.5-2.14.5a4.933 4.933 0 0 1-2.14-.5H5.6A3.6 3.6 0 0 0 2 16.6v.9A1.5 1.5 0 0 0 3.5 19h9a1.5 1.5 0 0 0 1.5-1.5v-.9a3.6 3.6 0 0 0-3.6-3.6Zm6.6-1a3 3 0 1 0-.002-6.002A3 3 0 0 0 17 12Zm1.5 1h-.119a4.21 4.21 0 0 1-1.381.25c-.488 0-.947-.1-1.381-.25H15.5c-.637 0-1.225.184-1.74.481A4.574 4.574 0 0 1 15 16.6v1.2c0 .069-.016.134-.019.2H20.5a1.5 1.5 0 0 0 1.5-1.5c0-1.934-1.566-3.5-3.5-3.5Z"
			/>
	  </svg>
	)
}

export default IconUsers
