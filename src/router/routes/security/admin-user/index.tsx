import type { RouteObject } from 'react-router-dom'
import { List, Create, Edit, Delete, ChangePassword, RolesAndPermissions } from '@/components/views/security/admin-user'
import { ServiceUnavailable } from '@/components'
import { AdminService } from '@/service'
import { ROUTE } from '@/enums'
import { RolesAndPermissionList } from '@/types'

const AdminRoutes: Array<RouteObject> = [
	{
		path: 'admin-user',
		children: [
			{
				path: ROUTE.LIST,
				element: <List />,
				loader: async () => {
					const Service = new AdminService()
					return await Service.list() || []
				},
			},
			{
				path: ROUTE.CREATE,
				element: <Create />
			},
			{
				path: `${ROUTE.UPDATE}/:id`,
				element: <Edit />
			},
			{
				path: `${ROUTE.DELETE}/:id`,
				element: <Delete />
			},
			{
				path: `${ROUTE.CHANGE_PASSWORD}/:id`,
				element: <ChangePassword />
			},
			{
				path: `${ROUTE.ROLES_AND_PERMISSIONS}/:id`,
				element: <RolesAndPermissions />,
				loader: async ({ params }): Promise<RolesAndPermissionList> => {
					const initialValue = {
						roles: [],
						permissions: []
					}

					if(!params.id) {
						return initialValue
					}
					
					const Service = new AdminService()
					return await Service.rolesAndPermissions(params.id as string) || initialValue
				},
				errorElement: <ServiceUnavailable />
			}
		]
	},
]

export default AdminRoutes