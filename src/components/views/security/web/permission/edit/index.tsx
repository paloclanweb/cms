import { type FC, type ReactElement, useState, useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, FormModal, PermissionForm } from '@/components'
import { type PermissionDTO, PermissionService } from '@/service'
import { useToast } from '@/hooks'

const initialValue: PermissionDTO = {
	Description: '',
	Name: '',
	Value: 0
}

const Edit: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const [formData, setFormData] = useState<PermissionDTO>(initialValue)
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

	const onSubmit = useCallback(async (): Promise<void> => {
		const Permission = new PermissionService()
		const response = await Permission.update(formData)

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		onClose()

		return toast({
			message: 'Admin user created successfully',
			status: 'success',
		})
	}, [formData])

	useEffect(() => {
		if(state?.data) {
			setFormData(state.data)
		}
	}, [state])
    
	return (
		<DefaultLayout title={'Web / Permission / Update'}>
			<FormModal open onClose={onClose} title={'Edit Permission'} width={'42.4rem'}>
				<PermissionForm onClose={onClose} onSubmit={onSubmit} />
			</FormModal>
		</DefaultLayout>
	)
}

export default Edit