import type { RouteObject } from 'react-router-dom'

import { List, Create, Delete, Permissions, Update } from '@/components/views/security/web/role/index'
import { RoleService } from '@/service'
import { ROUTE } from '@/enums'
import { type List as ListType } from '@/components'

const PermissionRoutes: Array<RouteObject> = [
	{
		path: 'role',
		children: [
			{
				path: ROUTE.LIST,
				element: <List />,
				loader: async () => {
					const Service = new RoleService()
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
			},
			{
				path: `${ROUTE.PERMISSIONS}/:id`,
				element: <Permissions />,
				loader: async ({ params }): Promise<ListType> => {
					if(!params.id) {
						return []
					}

					const Service = new RoleService()
					return await Service.permissions(params.id) || []
				}
			}
		]
	},
]

export default PermissionRoutes