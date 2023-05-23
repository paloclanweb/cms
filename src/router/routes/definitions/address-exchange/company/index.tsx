import type { RouteObject } from 'react-router-dom'
import { List, Companies, Create } from '@/components/views/definitions/address-exchange/company'
import { ROUTE } from '@/enums'
import { AddressExchangeService, type AddressExchangeModel, CompanionShipService } from '@/service'
import { ServiceUnavailable } from '@/components'
import type { CompaniesList } from '@/types'

const Company: RouteObject = {
	path: 'company',
	children: [
		{
			path: ROUTE.LIST,
			element: <List />,
			loader: async (): Promise<Array<AddressExchangeModel>> => {
				const Service = new AddressExchangeService()
				return await Service.list() || []
			},
			errorElement: <ServiceUnavailable />
		},
		{
			path: ROUTE.CREATE,
			element: <Create />,
			loader: async () => {
				const Service = new CompanionShipService()
				return await Service.list() || []
			},
			errorElement: <ServiceUnavailable />
		},
		{
			path: `${ROUTE.COMPANIES}/:id`,
			element: <Companies />,
			loader: async ({ params }): Promise<CompaniesList> => {
				const initialValue: CompaniesList = {
					Companies: [],
					CompanyGroups: []
				}

				if(!params.id) {
					return initialValue
				}

				const Service = new AddressExchangeService()
				return await Service.companiesAndCompanyGroups(params.id) || initialValue
			},
			errorElement: <ServiceUnavailable />
		},
	]
}

export default Company