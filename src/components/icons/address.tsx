import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconAddress: FC<Props> = (props: Props): ReactElement => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={40}
			height={40}
			fill="none"
			viewBox="0 0 48 49"
			{...props}
		>
			<path
				fill="#fff"
				d="M32.281 21.03a.47.47 0 00.469-.469V19a.47.47 0 00-.469-.469H31.5v-1.875c0-1.035-.84-1.875-1.875-1.875h-12.5c-1.035 0-1.875.84-1.875 1.875v16.25c0 1.035.84 1.875 1.875 1.875h12.5c1.035 0 1.875-.84 1.875-1.875V31.03h.781a.47.47 0 00.469-.469V29a.47.47 0 00-.469-.469H31.5v-2.5h.781a.47.47 0 00.469-.469V24a.47.47 0 00-.469-.469H31.5v-2.5h.781zm-8.906-1.25c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5a2.502 2.502 0 01-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5zm4.375 9.25c0 .414-.39.75-.875.75h-7c-.484 0-.875-.336-.875-.75v-.75c0-1.242 1.176-2.25 2.625-2.25h.195a4.032 4.032 0 003.11 0h.195c1.45 0 2.625 1.008 2.625 2.25v.75z"
			></path>
		</svg>
	)
}

export default IconAddress
