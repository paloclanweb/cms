import type { RouteObject } from 'react-router-dom'
import Group from './group'
import Company from './company'

const AddressExchangeRoutes: RouteObject = {
	path: 'address-exchange',
	children: [
		Group,
		Company
	]
}

export default AddressExchangeRoutes