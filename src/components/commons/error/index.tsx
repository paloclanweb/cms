import { type FC, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import type { ErrorProps } from './type'
import { Container, ImageContainer, Description, Title } from './style'
import { Route } from '@/constant'
import { DefaultLayout, Grid, Button } from '@/components'

const Error: FC<ErrorProps> = ({ description, image, title }: ErrorProps): ReactElement => {
	const navigate = useNavigate()

	return (
		<DefaultLayout title={'-'}>
			<Container>
				<ImageContainer>
			    	<img src={image} alt={title} />
				</ImageContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Grid container justifyContent={'center'} alignItems={'center'} columnGap={'1.2rem'}>
					<Grid item>
						<Button color={'primary'} variant={'contained'} onClick={() => navigate(Route.Security.AdminUsers.list, { replace: true })}>{'ANA EKRANA DÖN'}</Button>
					</Grid>
					<Grid item>
						<Button color={'primary'} variant={'outlined'} onClick={() => navigate(0)}>{'YENİDEN YÜKLE'}</Button>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	)
}

export default Error