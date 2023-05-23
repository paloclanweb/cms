import type { RouteObject } from 'react-router-dom'
import { Create, List, Companies } from '@/components/views/definitions/address-exchange/group'
import { ROUTE } from '@/enums'
import { AddressExchangeGroupService, type AddressExchangeGroupModel } from '@/service'
import { ServiceUnavailable, type List as ListType } from '@/components'

const Group: RouteObject = {
	path: 'company-group',
	children: [
		{
			path: ROUTE.LIST,
			element: <List />,
			loader: async (): Promise<Array<AddressExchangeGroupModel>> => {
				const Service = new AddressExchangeGroupService()
				return await Service.list() || []
			},
			errorElement: <ServiceUnavailable />
		},
		{
			path: ROUTE.CREATE,
			element: <Create />,
		},
		{
			path: `${ROUTE.COMPANIES}/:id`,
			element: <Companies />,
			loader: async ({ params }): Promise<ListType> => {
				if(!params.id) {
					return []
				}

				const Service = new AddressExchangeGroupService()
				return await Service.companies(params.id) || []
			},
			errorElement: <ServiceUnavailable />
		}
	]
}

export default Group