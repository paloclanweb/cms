import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { EndpointPermissionForm, CreateAction } from '@/components'
import { type EndpointDTO, EndpointService } from '@/service'
import { useToast } from '@/hooks'

const Create: FC = (): ReactElement => {
	const toast = useToast()
	const navigate = useNavigate()
	const { state } = useLocation()

	const onClose = useCallback(() => {
		navigate(Route.Security.Endpoints.Groups.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onCreate = useCallback(async (data: EndpointDTO): Promise<void> => {
		const Endpoint = new EndpointService()

		const response = await Endpoint.create(data)

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
			breadcrumb={'Endpoints / Group / Create'}
			title={'Create Permission'}
			onClose={onClose}
			onCreate={onCreate}
			Form={EndpointPermissionForm}
		/>
	)
}

export default Create