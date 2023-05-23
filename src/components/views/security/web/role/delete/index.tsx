import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, DangerModal } from '@/components'
import { RoleService } from '@/service'
import { useToast } from '@/hooks'

const Delete: FC = (): ReactElement => {
	const params = useParams()
	const toast = useToast()
	const { state } = useLocation()
	const navigate = useNavigate()

	const onClose = useCallback(() => {
		navigate(Route.Security.Web.Roles.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const deletePermission = useCallback(async (): Promise<void> => {
		if (!params.id) {
			return
		}

		const Role = new RoleService()
		const response = await Role.delete(params.id)

		if (!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		onClose()

		toast({
			message: 'Role deleted successfully',
			status: 'success',
		})
	}, [params])

	return (
		<DefaultLayout title={'Web / Role / Delete'}>
			<DangerModal
				title={'Delete Permission'}
				open
				onClose={onClose} 
				onConfirm={deletePermission}
				text={`Are you sure to delete ${state.data.Name} from Roles?`}
				strong={'It will be deleted from where it assigned on everywhere. This can’t be undone. '}
				confirmText={'YES, DELETE'}
				closeText={'CANCEL'}
			/>
		</DefaultLayout>
		
	)
}

export default Delete