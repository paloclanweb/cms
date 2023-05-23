import { type FC, type ReactElement, useCallback } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, DangerModal } from '@/components'
import { AdminService } from '@/service'
import { useToast } from '@/hooks'

const Delete: FC = (): ReactElement => {
	const params = useParams()
	const navigate = useNavigate()
	const { state } = useLocation()
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Security.AdminUsers.list, { 
			replace: true, 
			state: {
				...state,
				data: null
			}})
	}, [state])

	const deleteUser = useCallback(async (): Promise<void> => {
		if(!params.id) {
			return
		}
		
		const Admin = new AdminService()
		const response = await Admin.delete(params.id)

		if (!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		onClose()

		toast({
			message: 'User deleted successfully',
			status: 'success',
		})
	}, [params])
    
	return (
		<DefaultLayout title={'Admin User / Delete'}>
			<DangerModal
				title={'Delete Admin User'}
				open
				onClose={onClose} 
				onConfirm={deleteUser}
				text={`Are you sure to delete ${state.FirstName} ${state.LastName}?`}
				strong={'This action cannot be undone.'}
				confirmText={'YES, DELETE'}
				closeText={'CANCEL'}
			/>
		</DefaultLayout>
		
	)
}

export default Delete