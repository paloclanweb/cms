import type { 
	RoleModel,
	PermissionModel,
	TokenModel,
	DriverModel,
	TransporterOwnerModel,
	EndpointGroupModel,
	AddressExchangeGroupModel,
	CompanyModel,
	AssignedCompany,
	CompanionShipModel
} from '@/service'

import type { ListItem } from '@/components'

class Parser {
	role = (role: RoleModel, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			value: role.Id,
			label: role.Name,
			type: 'Role',
			isChecked,
			isSelected
		}
	}

	permission = (permission: PermissionModel, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			value: permission.Id,
			label: permission.Name,
			type: 'Permission',
			isChecked,
			isSelected
		}
	}

	driver = (driver: DriverModel, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			type: 'Driver',
			value: driver.Id,
			label: driver.FirstName && driver.LastName ? `${driver.FirstName} ${driver.MiddleName || ''} ${driver.LastName}` : 'N/A',
			isChecked,
			isSelected,
		}
	}

	transporterOwner = (transporterOwner: TransporterOwnerModel, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			type: 'Transporter Owner',
			value: transporterOwner.Id,
			label: transporterOwner.RegisteredCompanyName || transporterOwner.Name || transporterOwner.ShortName || 'N/A',
			isSelected,
			isChecked
		}
	}

	endpointGroup = (group: EndpointGroupModel, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			isChecked,
			isSelected,
			label: group.Name,
			type: 'Endpoint Group',
			value: group.Id
		}
	}

	assignedCompany = (company: AssignedCompany, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			value: company.Id,
			label: company.Name,
			type: 'Company',
			isChecked,
			isSelected
		}
	}

	company = (company: CompanyModel, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			isChecked,
			isSelected,
			label: company.RegisteredName,
			type: 'Company',
			value: company.Id
		}
	}

	companionship = (companionship: CompanionShipModel, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			isChecked,
			isSelected,
			label: companionship.RegisteredCompanyName || 'N/A',
			value: companionship.Id,
			type: 'Company'
		}
	}

	companyGroup = (companyGroup: AddressExchangeGroupModel, isChecked: boolean, isSelected: boolean): ListItem => {
		return {
			isChecked,
			isSelected,
			label: companyGroup.Name,
			type: 'Company Group',
			value: companyGroup.Id
		}
	}

	token = (token: string): TokenModel => {
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace('-', '+').replace('_', '/')
		return JSON.parse(window.atob(base64)) as TokenModel
	}

	date = (seconds: number): string => {
		const expirationDate = new Date((1 + seconds) * 1000)
		const day = String(expirationDate.getDate()).padStart(2, '0')
		const month = String(expirationDate.getMonth() + 1).padStart(2, '0')
		const year = expirationDate.getFullYear()
		const hours = String(expirationDate.getHours()).padStart(2, '0')
		const minutes = String(expirationDate.getMinutes()).padStart(2, '0')
		return `${day}/${month}/${year} ${hours}:${minutes}`
	}
}

export default Parser