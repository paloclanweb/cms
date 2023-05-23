import { type FC, type ReactElement, useState, useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, FormModal, RoleForm } from '@/components'
import { type RoleDTO, RoleService } from '@/service'
import { useToast } from '@/hooks'

const initialValue: RoleDTO = {
	Name: '',
	Description: '',
	RoleGroup: 0,
	IsActive: true,
	Permissions: [],
}

const Edit: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const [formData, setFormData] = useState<RoleDTO>(initialValue)
	const toast = useToast()

	const onClose = useCallback(() => {
		navigate(Route.Security.Web.Roles.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSubmit = useCallback(async (): Promise<void> => {
		const Role = new RoleService()
		const response = await Role.update(formData)

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		onClose()

		return toast({
			message: 'Role updated successfully',
			status: 'success',
		})
	}, [formData])

	useEffect(() => {
		if(state?.data) {
			setFormData(state.data)
		}
	}, [state])
    
	return (
		<DefaultLayout title={'Web / Role / Update'}>
			<FormModal open onClose={onClose} title={'Edit Permission'} width={'42.4rem'}>
				<RoleForm onClose={onClose} onSubmit={onSubmit} />
			</FormModal>
		</DefaultLayout>
	)
}

export default Edit