import { type FC, type ReactElement, useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, FormModal, AdminUserForm } from '@/components'
import { AdminService, type AdminDTO } from '@/service'
import { useToast } from '@/hooks'

const initialValue: AdminDTO = {
	Description: '',
	Email: '',
	FirstName: '',
	LastName: '',
	Phone: '',
	Password: '',
	PasswordAgain: '',
}

const Edit: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const [formData, setFormData] = useState<AdminDTO>(initialValue)
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Security.AdminUsers.list, { 
			replace: true, 
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSubmit = useCallback(async () => {
		const Admin = new AdminService()

		const response = await Admin.update(formData)

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		return toast({
			message: 'Admin user updated successfully',
			status: 'success',
		})
	}, [formData])

	useEffect(() => {
		if(state?.data) {
			setFormData(state.data)
		}
	}, [state])

	return (
		<DefaultLayout title={'Admin User / Update'}>
			<FormModal open onClose={onClose} title={'Edit Admin User'} width={'42.4rem'}>
				<AdminUserForm onClose={onClose} onSubmit={onSubmit} />
			</FormModal>
		</DefaultLayout>
	)
}

export default Edit