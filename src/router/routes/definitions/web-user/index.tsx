import type { RouteObject } from 'react-router-dom'
import { List } from '@/components/views/definitions/web-users'
import { WebUserService, type WebUserModel } from '@/service'
import { ROUTE } from '@/enums'
import { ServiceUnavailable } from '@/components'

const WebUserRoutes: RouteObject = {
	path: 'web-user',
	children: [
		{
			path: ROUTE.LIST,
			element: <List />,
			loader: async (): Promise<WebUserModel> => {
				const Service = new WebUserService()
				return await Service.list() || {
					PageIndex: 0,
					TotalCount: 0,
					Rows: [],
				}
			},
			errorElement: <ServiceUnavailable />
		},
	]
}

export default WebUserRoutes