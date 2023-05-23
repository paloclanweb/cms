import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconTip: FC<Props> = (props: Props): ReactElement => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="#00829B"
            d="M12 5.125a3.754 3.754 0 0 0-3.75 3.75.625.625 0 1 0 1.25 0c0-1.379 1.122-2.5 2.5-2.5a.625.625 0 1 0 0-1.25ZM8.877 19.937c0 .123.037.243.105.345l.957 1.44a.625.625 0 0 0 .52.278h3.08c.21 0 .406-.105.521-.279l.958-1.439a.629.629 0 0 0 .104-.345l.002-1.687H8.876l.001 1.687ZM12 2C8.005 2 5.125 5.241 5.125 8.875c0 1.733.642 3.315 1.701 4.523.65.742 1.67 2.297 2.048 3.6V17h1.875v-.004c0-.187-.028-.372-.084-.55a12.317 12.317 0 0 0-2.428-4.284 4.984 4.984 0 0 1-1.235-3.287c-.008-2.876 2.33-5 4.998-5 2.757 0 5 2.243 5 5 0 1.21-.439 2.377-1.236 3.287a12.345 12.345 0 0 0-2.426 4.276c-.057.18-.087.369-.087.558V17h1.875v-.002c.378-1.303 1.398-2.858 2.048-3.6a6.84 6.84 0 0 0 1.701-4.523A6.875 6.875 0 0 0 12 2Z"
        />
    </svg>
)

export default IconTip
