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
		  d="M16.666 20.78a2.915 2.915 0 0 0 2.917-2.917 2.915 2.915 0 0 0-2.916-2.917 2.915 2.915 0 0 0-2.917 2.917 2.915 2.915 0 0 0 2.916 2.917Zm2 .833h-.216a4.103 4.103 0 0 1-1.784.417c-.64 0-1.24-.157-1.783-.417h-.216a3 3 0 0 0-3 3v.75c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-.75a3 3 0 0 0-3-3Zm5.5-.833a2.5 2.5 0 1 0 0-5.002 2.5 2.5 0 0 0 0 5.002Zm1.25.833h-.099a3.508 3.508 0 0 1-1.15.208c-.407 0-.79-.083-1.152-.208h-.099c-.53 0-1.02.154-1.45.401a3.811 3.811 0 0 1 1.034 2.599v1c0 .057-.013.112-.016.167h4.6c.69 0 1.25-.56 1.25-1.25a2.915 2.915 0 0 0-2.918-2.917Z"
			/>
	  </svg>
	)
}

export default IconUsers
