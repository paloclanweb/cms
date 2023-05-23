import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, DangerModal } from '@/components'
import { EndpointGroupService } from '@/service'
import { useToast } from '@/hooks'

const Delete: FC = (): ReactElement => {
	const params = useParams()
	const toast = useToast()
	const { state } = useLocation()
	const navigate = useNavigate()

	const onClose = useCallback(() => {
		navigate(Route.Security.Endpoints.Groups.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const deleteEndpoint = useCallback(async (): Promise<void> => {
		if(!params.id) {
			return
		}

		const Endpoint = new EndpointGroupService()
		const response = await Endpoint.delete(params.id)

		if (!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		onClose()

		toast({
			message: 'Endpoint Permission deleted successfully',
			status: 'success',
		})
	}, [params])
    
	return (
		<DefaultLayout title={'Endpoints / Group / Delete'}>
			<DangerModal
				title={'Delete Admin User'}
				open
				onClose={onClose} 
				onConfirm={deleteEndpoint}
				text={`Are you sure to delete ${state.data.Path}?`}
				strong={'This can’t be undone.'}
				confirmText={'YES, DELETE'}
				closeText={'CANCEL'}
			/>
		</DefaultLayout>
		
	)
}

export default Delete