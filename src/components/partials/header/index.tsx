import { type FC, type ReactElement } from 'react'
import { Container, Title, FullName, Email } from './style'
import type { HeaderProps } from './type'
import { useUser } from '@/hooks'
import { Grid, IconBell, Button, Logout } from '@/components'

const Header: FC<HeaderProps> = ({ title }: HeaderProps): ReactElement | null => {
	const user = useUser()

	return (
		<Container component={'header'}>
			<Grid container alignItems={'center'} justifyContent={'space-between'}>
				<Grid item>
					{title && <Title>{title}</Title>}
				</Grid>
				<Grid item>
					<Grid container spacing={3} alignItems={'center'}>
						{user ? (
							<>
								<Grid item>
									<Button>
										<IconBell />
									</Button>
								</Grid>
								<Grid item>
									<FullName>{user.fullName}</FullName>
									<Email>{user.email}</Email>
								</Grid>
							</>
						) : null}
						<Grid item>
							<Logout />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Header