import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, DangerModal } from '@/components'
import { PermissionService } from '@/service'
import { useToast } from '@/hooks'

const Delete: FC = (): ReactElement => {
	const params = useParams()
	const { state } = useLocation()
	const navigate = useNavigate()
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Security.Web.Permissions.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const deletePermission = useCallback(async (): Promise<void> => {
		if(!params.id) {
			return 
		}

		const Permission = new PermissionService()
		const response = await Permission.delete(params.id)

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
		<DefaultLayout title={'Web / Permission / Delete'}>
			<DangerModal
				title={'Delete Permission'}
				open
				onClose={onClose} 
				onConfirm={deletePermission}
				text={`Are you sure to delete ${state.data.Name} from Permissions?`}
				strong={'It will be deleted from where it assigned on everywhere. This can’t be undone.'}
				confirmText={'YES, DELETE'}
				closeText={'CANCEL'}
			/>
		</DefaultLayout>
		
	)
}

export default Delete