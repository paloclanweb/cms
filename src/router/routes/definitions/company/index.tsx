import type { RouteObject } from 'react-router-dom'
import { Create, List, Delete, Update } from '@/components/views/definitions/company'
import { CompanyService } from '@/service'
import { ROUTE } from '@/enums'
import { ServiceUnavailable } from '@/components'

const CompanyRoutes: RouteObject = {
	path: 'company',
	children: [
		{
			path: ROUTE.LIST,
			element: <List />,
			loader: async () => {
				const Service = new CompanyService()
				return await Service.list()
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
}

export default CompanyRoutes