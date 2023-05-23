import { type FC, type ReactElement, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Route } from '@/constant'
import { RoleForm, CreateAction } from '@/components'
import { type RoleDTO, RoleService } from '@/service'
import { useToast } from '@/hooks'

const Create: FC = (): ReactElement => {
	const { state } = useLocation()
	const navigate = useNavigate()
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

	const onCreate = useCallback(async (data: RoleDTO): Promise<void> => {
		const Role = new RoleService()
		const response = await Role.create(data)

		if(!response) {
			return toast({
				message: 'Something went wrong',
				status: 'error',
			})
		}

		onClose()

		return toast({
			message: 'Role created successfully',
			status: 'success',
		})
	}, [])

	return (
		<CreateAction
			onClose={onClose}
			onCreate={onCreate}
			title={'Add Role'}
			width={'42.4rem'}
			breadcrumb={'Web / Role / Create'}
			Form={RoleForm}
		/>
	)
}

export default Create