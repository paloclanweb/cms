import { type FC, type ReactElement} from 'react'
import { Link as RouterLink } from 'react-router-dom'
import type { LinkProps } from './type'

const Link: FC<LinkProps> = ({ to, className, children, ...rest }: LinkProps): ReactElement => {
	return (
		<RouterLink to={to} className={className} {...rest}>
			{children}
		</RouterLink>
	)
}

export default Link