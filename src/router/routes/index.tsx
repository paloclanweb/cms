import type { RouteObject } from 'react-router-dom'
import { AdminService } from '@/service'
import { NotAuthorized, NotFound, ServiceUnavailable } from '@/components'
import AdminUserList from '@/components/views/security/admin-user/list'
import Auth from './auth'
import Definitions from './definitions'
import Security from './security'

const routes: Array<RouteObject> = [
	Auth,
	Definitions,
	Security,
	{
		path: '/',
		element: <AdminUserList />,
		loader: async () => {
			const Service = new AdminService()
			return await Service.list() || []
		},
		errorElement: <ServiceUnavailable />
	},
	{
		path: '/not-authorized',
		element: <NotAuthorized />
	},
	{
		path: '*',
		element: <NotFound />,
	},
]

export default routes