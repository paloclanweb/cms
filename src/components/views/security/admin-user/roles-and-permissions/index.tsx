import { type FC, type ReactElement, useState, useCallback, useEffect } from 'react'
import { useLocation, useNavigate, useLoaderData, useParams } from 'react-router-dom'
import { AdminService } from '@/service'
import { DefaultLayout, RolesAndPermissions as RolesAndPermissionsRelations } from '@/components'
import { Route } from '@/constant'
import { useToast } from '@/hooks'
import type { RolesAndPermissionList } from '@/types'

const RolesAndPermissions: FC = (): ReactElement => {
	const toast = useToast()
	const params = useParams()
	const data = useLoaderData() as RolesAndPermissionList
	const navigate = useNavigate()
	const { state } = useLocation()
	const [list, setList] = useState<RolesAndPermissionList>({
		roles: [],
		permissions: []
	})

	useEffect(() => {
		if(data) {
			setList(data)
		}
	}, [data])

	const onClose = useCallback((): void => {
		navigate(Route.Security.AdminUsers.list, { 
			replace: true, 
			state: {
				...state,
				data: null
			}})
	}, [state])

	const onSave = useCallback(async () => {
		if(!params?.id) {
			onClose()
			
			return toast({
				message: 'Please select a user',
				status: 'error'
			})
		}

		const Service = new AdminService()
		const selectedRoles = list.roles.filter(role => role.isSelected).map(role => role.value)
		const selectedPermissions = list.permissions.filter(permission => permission.isSelected).map(permission => permission.value)

		const [roles, permissions] = await Promise.all([Service.setPermissions(params.id, selectedPermissions), Service.setRoles(params.id, selectedRoles)])

		onClose()

		if(!roles || !permissions) {
			return toast({
				message: 'Something went wrong',
				status: 'error'
			})
		}

		toast({
			message: 'Admin roles and permissions updated successfully',
			status: 'success',
		})
	}, [list, state, params])

	return (
		<DefaultLayout title={'Admin User / Roles and Permissions'}>
			<RolesAndPermissionsRelations
				title={`${state.data.FirstName} ${state.data.LastName}`}
				open
				onClose={onClose}
				onSave={onSave}
				list={list}
				setList={setList}
			/>
		</DefaultLayout>
	)
}

export default RolesAndPermissions