import type { RouteObject } from 'react-router-dom'

import { List } from '@/components/views/security/api-key/index'
import { ServiceUnavailable } from '@/components'
import { APIKeyService } from '@/service'
import { ROUTE } from '@/enums'

const ApiKeyRoutes: Array<RouteObject> = [
	{
		path: 'api-key',
		children: [
			{
				path: ROUTE.LIST,
				element: <List />,
				loader: async () => {
					const Service = new APIKeyService()
					return await Service.list() || []
				},
				errorElement: <ServiceUnavailable />
			},
		]
	},
]

export default ApiKeyRoutes