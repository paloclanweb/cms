import Service from '@/service/base'
import type { AddressExchangeGroupDTO } from './dto'
import type { AddressExchangeGroupModel, AssignedCompany } from './model'
import { type List } from '@/components'
import { Parser } from '@/helpers'
import { CompanionShipService } from '@/service'

class AddressExchangeGroupService extends Service {
	list = async (): Promise<Array<AddressExchangeGroupModel> | void> => {
		return await this.Request<Array<AddressExchangeGroupModel>>({
			onlyAuth: true,
			url: 'admin/address/exchange/groups'
		})
	}

	create = async ({ Name }: AddressExchangeGroupDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			onlyAuth: true,
			url: 'admin/address/exchange/group',
			method: 'POST',
			data: JSON.stringify(Name),
		})
	}

	update = async ({ Id, Name, Count }: AddressExchangeGroupDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			onlyAuth: true,
			url: 'admin/address/exchange/group',
			method: 'PUT',
			data: {
				Id,
				Name,
				Count
			}
		})
	}

	delete = async (Id: string): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/address/exchange/groups/${Id}`,
			method: 'DELETE',
			onlyAuth: true
		})
	}

	assignedCompanies = async (Id: string): Promise<Array<AssignedCompany> | void> => {
		return await this.Request<Array<AssignedCompany>>({
			url: `admin/address/exchange/group?id=${Id}`,
			onlyAuth: true
		})
	}

	companies = async (Id: string): Promise<List | void> => {
		const Companionship = new CompanionShipService()

		const [companies, assignedCompanies] = await Promise.all([Companionship.list(), this.assignedCompanies(Id)])

		if(!companies || !assignedCompanies) {
			return
		}

		const Parse = new Parser()
		return companies.map(company => Parse.companionship(company, false, assignedCompanies.map(company => company.Id).includes(company.Id)))
	}

	setCompanies = async (Id: string, Companies: Array<string>): Promise<void | boolean> => {
		return await this.Request<boolean>({
			url: `admin/address/exchange/group/detail?groupId=${Id}`,
			onlyAuth: true,
			method: 'POST',
			data: Companies
		})
	}
}

export default AddressExchangeGroupService