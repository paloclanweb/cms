import { type FC, type ReactElement, useEffect, useState, useCallback } from 'react'
import { useNavigate, useLocation, useLoaderData, useParams } from 'react-router-dom'
import { Route } from '@/constant'
import { DefaultLayout, RolesAndPermissions as RolesAndPermissionsRelation } from '@/components'
import { EndpointService } from '@/service'
import { useToast } from '@/hooks'
import type { RolesAndPermissionList } from '@/types'

const RolesAndPermissions: FC = (): ReactElement => {
	const toast = useToast()
	const params = useParams()
	const data = useLoaderData()
	const { state } = useLocation()
	const navigate = useNavigate()
	const [list, setList] = useState<RolesAndPermissionList>({
		roles: [],
		permissions: []
	})

	const onClose = useCallback(() => {
		navigate(Route.Security.Endpoints.Permissions.list, {
			replace: true,
			state: {
				...state,
				data: null
			}
		})
	}, [state])

	const onSave = useCallback(async () => {
		if(!params.id) {
			return onClose()
		}

		const Service = new EndpointService()
		const selectedRoles = list.roles.filter(role => role.isSelected).map(role => role.value)
		const selectedPermissions = list.permissions.filter(permission => permission.isSelected).map(permission => permission.value)
		const response = await Service.setRolesAndPermissions(params.id, selectedRoles, selectedPermissions)

		onClose()

		if(!response) {
			return toast({
				message: 'Something went wrong, please try again later.',
				status: 'error'
			})
		}

		toast({
			message: 'Roles and Permissions updated successfully!',
			status: 'success'
		})
	}, [state, list, params])

	useEffect(() => {
		if(data) {
			setList(data as RolesAndPermissionList)
		}
	}, [data])

	return (
		<DefaultLayout title={'Endpoint / Permission / Roles and Permissions'}>
			<RolesAndPermissionsRelation
				title={state.data.Path}
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