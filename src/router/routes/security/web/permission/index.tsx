import type { RouteObject } from 'react-router-dom'

import { List, Create, Delete, Update } from '@/components/views/security/web/permission/index'
import { PermissionService, type PermissionModel } from '@/service'
import { ROUTE } from '@/enums'

const PermissionRoutes: Array<RouteObject> = [
	{
		path: 'permission',
		children: [
			{
				path: ROUTE.LIST,
				element: <List />,
				loader: async (): Promise<Array<PermissionModel>> => {
					const Service = new PermissionService()
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
				path: `${ROUTE.DELETE}/:id`,
				element: <Delete />
			}
		]
	},
]

export default PermissionRoutes