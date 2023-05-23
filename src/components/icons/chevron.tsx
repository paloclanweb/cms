import { type FC, type ReactElement, type SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const IconChevron: FC<Props> = (props: Props): ReactElement => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            {...props}
        >
            <path
                d="m4.127 15.307.715.715c.17.17.444.17.614 0L12 9.493l6.544 6.529c.17.17.444.17.614 0l.715-.715a.434.434 0 0 0 0-.614l-7.566-7.566a.434.434 0 0 0-.614 0l-7.566 7.566a.434.434 0 0 0 0 .614Z"
            />
        </svg>
    )
}

export default IconChevron
