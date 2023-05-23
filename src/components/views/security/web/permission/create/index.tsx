import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { PermissionForm, CreateAction } from '@/components'
import { type PermissionDTO, PermissionService } from '@/service'
import { useToast } from '@/hooks'

<<<<<<< Updated upstream
=======
const initialValue: PermissionDTO = {
	Name: '',
	Description: '',
	Value: 0
}

>>>>>>> Stashed changes
const Create: FC = (): ReactElement => {
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

	const onCreate = useCallback(async (data: PermissionDTO): Promise<void> => {
		const Permission = new PermissionService()
		const response = await Permission.create(data)

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
	}, [])
    
	return (
		<CreateAction
			breadcrumb={'Web / Permission / Create'}
			title={'Add New Permission'}
			onClose={onClose}
			onCreate={onCreate}
			width={'42.4rem'}
			Form={PermissionForm}
		/>
	)
}

export default Create