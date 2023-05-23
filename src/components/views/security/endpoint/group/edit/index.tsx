import { type FC, type ReactElement, useEffect, useState, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, FormModal, EndpointPermissionForm } from '@/components'
import { EndpointService, type EndpointDTO } from '@/service'
import { useToast } from '@/hooks'

const initialValue: EndpointDTO = {
	Description: '',
	Method: 1,
	Path: '',
}

const Edit: FC = (): ReactElement => {
	const navigate = useNavigate()
	const { state } = useLocation()
	const [formData, setFormData] = useState<EndpointDTO>(initialValue)
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Security.Endpoints.Groups.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	useEffect(() => {
		if(state.data) {
			setFormData(state.data)
		}
	}, [state])

	const onSubmit = useCallback(async () => {
		const Endpoint = new EndpointService()

		const response = await Endpoint.update(formData)

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		return toast({
			message: 'Endpoint updated successfully',
			status: 'success',
		})
	}, [formData])

	return (
		<DefaultLayout title={'Endpoints / Group / Update'}>
			<FormModal open onClose={onClose} title={'Edit Endpoint Permission'} width={'42.4rem'}>
				<EndpointPermissionForm onClose={onClose} onSubmit={onSubmit} />
			</FormModal>
		</DefaultLayout>
	)
}

export default Edit