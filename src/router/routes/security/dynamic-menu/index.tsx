import type { RouteObject } from 'react-router-dom'
import { DynamicMenuService, type DynamicMenuModel } from '@/service'
import { Create, List, Update, Delete } from '@/components/views/security/dynamic-menu'
import { ROUTE } from '@/enums'
import { ServiceUnavailable } from '@/components'

const DynamicMenuRoutes: Array<RouteObject> = [
	{
		path: 'dynamic-menu',
		children: [
			{
				path: ROUTE.LIST,
				element: <List />,
				loader: async (): Promise<Array<DynamicMenuModel>> => {
					const Service = new DynamicMenuService()
					return await Service.list() || []
				},
				errorElement: <ServiceUnavailable />
			},
			{
				path: ROUTE.CREATE,
				element: <Create />,
			},
			{
				path: `${ROUTE.UPDATE}/:id`,
				element: <Update />,
			},
			{
				path: `${ROUTE.DELETE}/:id`,
				element: <Delete />,
			},
		]
	},
]

export default DynamicMenuRoutes