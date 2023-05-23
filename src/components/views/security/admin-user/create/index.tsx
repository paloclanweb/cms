import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AdminUserForm, CreateAction } from '@/components'
import { AdminService, type AdminDTO } from '@/service'
import { Route } from '@/constant'
import { useToast } from '@/hooks'

const Create: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Security.AdminUsers.list, { 
			replace: true, 
			state: {
				...state,
				data: null
			}})
	}, [state])

	const onCreate = useCallback(async (data: AdminDTO): Promise<void> => {
		const Admin = new AdminService()

		const response = await Admin.create(data)

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		return toast({
			message: 'Admin user created successfully',
			status: 'success',
		})
	}, [])

	return (
		<CreateAction
			breadcrumb={'Admin User / Create'}
			title={'Add Admin User'}
			width={'42.4rem'}
			onClose={onClose}
			onCreate={onCreate}
			Form={AdminUserForm}
		/>
	)
}

export default Create