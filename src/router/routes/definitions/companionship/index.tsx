import type { RouteObject } from 'react-router-dom'
import { Create, List, Companions } from '@/components/views/definitions/companionship'
import { ROUTE } from '@/enums'
import { CompanionShipService, type CompanionShipModel } from '@/service'
import { ServiceUnavailable } from '@/components'
import { CompanionList } from '@/types'


const CompanionshipRoutes: RouteObject = {
	path: 'companionship',
	children: [
		{
			path: ROUTE.LIST,
			element: <List />,
			loader: async (): Promise<Array<CompanionShipModel>> => {
				const Service = new CompanionShipService()
				return await Service.list() || []
			},
			errorElement: <ServiceUnavailable />
		},
		{
			path: ROUTE.CREATE,
			element: <Create />,
			loader: async (): Promise<Array<CompanionShipModel>> => {
				const Service = new CompanionShipService()
				return await Service.list() || []
			},
			errorElement: <ServiceUnavailable />
		},
		{
			path: `${ROUTE.COMPANIONS}/:id`,
			element: <Companions />,
			loader: async ({ params }): Promise<CompanionList> => {
				if(!params.id) {
					return {
						Drivers: [],
						TransporterOwners: []
					}
				}

				const Service = new CompanionShipService()
				return await Service.getCompanions(params.id)
			},
			errorElement: <ServiceUnavailable />
		}
	]
}

export default CompanionshipRoutes