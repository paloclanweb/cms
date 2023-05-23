import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { Modal, DefaultLayout } from '@/components'

const ChangePassword: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()

	const onClose = useCallback(() => {
		navigate(Route.Security.AdminUsers.list, { 
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	return (
		<DefaultLayout title={'Admin Users / Change Password'}>
			<Modal open onClose={onClose} title={'Change Password'}>
				<>
                
				</>
			</Modal>
		</DefaultLayout>
	)
}

export default ChangePassword