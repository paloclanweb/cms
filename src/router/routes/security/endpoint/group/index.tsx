import type { RouteObject } from 'react-router-dom'

import { List, Create, Delete, Update, RolesAndPermissions, Endpoints } from '@/components/views/security/endpoint/group'
import { EndpointGroupService } from '@/service'
import { ROUTE } from '@/enums'
import { ServiceUnavailable } from '@/components'
import type { RolesAndPermissionList } from '@/types'

const GroupRoutes: Array<RouteObject> = [
	{
		path: 'group',
		children: [
			{
				path: ROUTE.LIST,
				element: <List />,
				loader: async () => {
					const Service = new EndpointGroupService()
					return await Service.list() || []
				},
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
				path: `${ROUTE.ENDPOINTS}/:id`,
				element: <Endpoints />,
				loader: async ({ params }) => {
					if(!params.id) {
						return []
					}

					const Service = new EndpointGroupService()
					return await Service.endpoints(params.id) || []
				},
				errorElement: <ServiceUnavailable />
			},
			{
				path: `${ROUTE.ROLES_AND_PERMISSIONS}/:id`,
				element: <RolesAndPermissions />,
				loader: async ({ params }): Promise<RolesAndPermissionList> => {
					const initialValue: RolesAndPermissionList = {
						roles: [],
						permissions: []
					}
					
					if(!params.id) {
						return initialValue
					}

					const Service = new EndpointGroupService()
					return await Service.getRolesAndPermissions(params.id) || initialValue
				},
				errorElement: <ServiceUnavailable />
			}
		]
	},
]

export default GroupRoutes