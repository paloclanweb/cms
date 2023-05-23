import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconCopy: FC<Props> = (props: Props): ReactElement => {
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
				d="M15.75 19.5v1.563c0 .517-.42.937-.938.937H4.188a.937.937 0 0 1-.938-.938V6.688c0-.517.42-.937.938-.937H7v11.563A2.19 2.19 0 0 0 9.188 19.5h6.562Zm0-13.438V2H9.187a.937.937 0 0 0-.937.938v14.374c0 .518.42.938.938.938h10.624c.518 0 .938-.42.938-.938V7h-4.063a.94.94 0 0 1-.937-.938Zm4.725-1.212L17.9 2.275A.938.938 0 0 0 17.237 2H17v3.75h3.75v-.237a.938.938 0 0 0-.275-.663Z"
			/>
		</svg>
	)
}

export default IconCopy
