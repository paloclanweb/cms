import type { RouteObject } from 'react-router-dom'

import { List, Create, Delete, Update, Groups, RolesAndPermissions } from '@/components/views/security/endpoint/permission/index'
import { EndpointService } from '@/service'
import { ROUTE } from '@/enums'
import { ServiceUnavailable } from '@/components'
import type { RolesAndPermissionList } from '@/types'

const PermissionRoutes: Array<RouteObject> = [
	{
		path: 'permission',
		children: [
			{
				path: ROUTE.LIST,
				element: <List />,
				loader: async () => {
					const Service = new EndpointService()
					return await Service.list() || []
				}
			},
			{
				path: ROUTE.CREATE,
				element: <Create />
			},
			{
				path: `${ROUTE.UPDATE}/:id`,
				element: <Update />
			},
			{
				path: `${ROUTE.GROUPS}/:id`,
				element: <Groups />,
				loader: async ({ params }) => {
					if(!params.id) {
						return []
					}

					const Service = new EndpointService()
					return await Service.groups(params.id as string) || []
				},
				errorElement: <ServiceUnavailable />
			},
			{
				path: `${ROUTE.DELETE}/:id`,
				element: <Delete />
			},
			{
				path: `${ROUTE.ROLES_AND_PERMISSIONS}/:id`,
				element: <RolesAndPermissions />,
				loader: async ({ params }): Promise<RolesAndPermissionList> => {
					const initialValue: RolesAndPermissionList = {
						permissions: [],
						roles: []
					}

					if(!params.id) {
						return initialValue
					}

					const Service = new EndpointService()
					return await Service.getRolesAndPermissions(params.id as string) || initialValue
				},
				errorElement: <ServiceUnavailable />
			}
		]
	},
]

export default PermissionRoutes