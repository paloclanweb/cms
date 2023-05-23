import type { RouteObject } from 'react-router-dom'
import AdminUserRoutes from './admin-user'
import ApiKeyRoutes from './api-key'
import DynamicMenuRoutes from './dynamic-menu'
import { EndpointGroupRoutes, EndpointPermissionRoutes } from './endpoint'
import { WebPermissionRoutes, WebRoleRoutes } from './web'

const SecurityRoutes: RouteObject = {
	path: '/security',
	children: [
		...AdminUserRoutes,
		...ApiKeyRoutes,
		...DynamicMenuRoutes,
		{
			path: 'endpoint',
			children: [
				...EndpointGroupRoutes,
				...EndpointPermissionRoutes
			]
		},
		{
			path: 'web',
			children: [
				...WebPermissionRoutes,
				...WebRoleRoutes
			]
		}
	]
}

export default SecurityRoutes