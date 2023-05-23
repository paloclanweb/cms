import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconAPIKey: FC<Props> = (props: Props): ReactElement => {
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
				d="M27.5 18.436a5.156 5.156 0 0 1-6.118 5.067l-.704.791a.7.7 0 0 1-.525.236h-1.09v1.172a.703.703 0 0 1-.704.703h-1.172v1.172a.703.703 0 0 1-.703.703h-3.28a.703.703 0 0 1-.704-.703V25.29c0-.186.074-.365.206-.497l4.74-4.74a5.156 5.156 0 0 1 4.897-6.772c2.857-.001 5.157 2.3 5.157 5.155Zm-5.156-1.406a1.406 1.406 0 1 0 2.812 0 1.406 1.406 0 0 0-2.812 0Z"
			/>
		</svg>
	)
}

export default IconAPIKey
