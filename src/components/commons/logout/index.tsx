import { type FC, type ReactElement, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button, IconLogout, Grid } from '@/components'
import { Route } from '@/constant'
import { Content, Text } from './style'
import { Cookie } from '@/helpers'

const Logout: FC = (): ReactElement => {
	const [open, setOpen] = useState<boolean>(false)
	const navigate = useNavigate()

	const logOut = useCallback((): void => {
		const BrowserCookie = new Cookie()
		BrowserCookie.delete('token')
		navigate(Route.Auth.Login, { replace: true })
	}, [])

	return (
		<>
			<Button onClick={() => setOpen(true)}>
				<IconLogout />
			</Button>
			<Modal open={open} onClose={() => setOpen(false)} title={'Logging Out?'}>
				<Content>
					<Text>Are you sure to log out? We’ll make sure everything is in place while you are gone</Text>
					<Grid container justifyContent={'flex-end'} alignItems={'center'} gap={'2rem'}>
						<Grid item>
							<Button color={'primary'} variant={'outlined'} onClick={() => setOpen(false)}>{'NO I\'LL STAY'}</Button>
						</Grid>
						<Grid item>
							<Button color={'error'} variant={'contained'} onClick={logOut}>YES, LOG OUT</Button>
						</Grid>
					</Grid>
				</Content>
			</Modal>
		</>
	)
}

export default Logout