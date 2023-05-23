import type { RouteObject } from 'react-router-dom'
import AddressExchangeRoutes from './address-exchange'
import CompanionshipRoutes from './companionship'
import CompanyRoutes from './company'
import WebUserRoutes from './web-user'

const DefinitionsRoutes: RouteObject = {
	path: '/definitions',
	children: [
		AddressExchangeRoutes,
		CompanionshipRoutes,
		CompanyRoutes,
		WebUserRoutes
	]
}

export default DefinitionsRoutes