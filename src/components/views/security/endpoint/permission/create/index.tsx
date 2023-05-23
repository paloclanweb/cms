import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { EndpointPermissionForm, CreateAction } from '@/components'
import { type EndpointDTO, EndpointService } from '@/service'
import { useToast } from '@/hooks'

const Create: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Security.Endpoints.Permissions.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onCreate = useCallback(async (data: EndpointDTO): Promise<void> => {
		const Endpoint = new EndpointService()

		const response = Endpoint.create(data)

		if(!response) {
			return toast({
				message: 'Something went wrong!',
				status: 'error',
			})
		}

		onClose()

		return toast({
			message: 'Endpoint created successfully!',
			status: 'success',
		})

	}, [])
    
	return (
		<CreateAction
			breadcrumb={'Endpoints / Permission / Create'}
			title={'Create Permission'}
			onClose={onClose}
			onCreate={onCreate}
			Form={EndpointPermissionForm}
		/>
	)
}

export default Create