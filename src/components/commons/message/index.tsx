import { type FC, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import {BackButton, Container, Description, LogoContainer, Title} from './styles'
import type { StatusSuccessProps } from './type'

const Message: FC<StatusSuccessProps> = ({ back, title, icon, description }: StatusSuccessProps): ReactElement => {
	const navigate = useNavigate()

	return (
		<Container>
			<LogoContainer>
				{icon}
				<Title as={'h1'}>{title}</Title>
				{description && <Description>{description}</Description>}
			</LogoContainer>
			{back && (
				<BackButton type={'button'} variant={'contained'} color={'primary'} fullWidth onClick={() => navigate(back.url, { replace: true })}>{back.text}</BackButton>
			)}
		</Container>
	)
}

export default Message