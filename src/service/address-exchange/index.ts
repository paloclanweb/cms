import Service from '@/service/base'
import type { AddressExchangeModel, CompaniesAndGroups } from './model'
import { type CompaniesList } from '@/types'
import { CompanyService, AddressExchangeGroupService } from '@/service'
import { Parser } from '@/helpers'

class AddressExchange extends Service {
	list = async (): Promise<Array<AddressExchangeModel> | void> => {
		return await this.Request<Array<AddressExchangeModel>>({
			url: 'admin/address/exchange/list'
		})
	}

	update = async (): Promise<void> => {
		return await this.Request({
			url: 'admin/address/exchange/list',
			method: 'PUT'
		})
	}

	getAssignedCompaniesAndGroups = async (Id: string): Promise<CompaniesAndGroups | void> => {
		return await this.Request<CompaniesAndGroups>({
			url: `admin/address/exchange/list/${Id}`,
			onlyAuth: true
		})
	}

	companiesAndCompanyGroups = async (Id: string): Promise<CompaniesList> => {
		const Company = new CompanyService()
		const CompanyGroup = new AddressExchangeGroupService()

		const [companies, companyGroups, assigned] = await Promise.all([Company.list(), CompanyGroup.list(), this.getAssignedCompaniesAndGroups(Id)])

		if(!companies || !companyGroups || !assigned) {
			return {
				Companies: [],
				CompanyGroups: []
			}
		}


		const assignedCompanies = assigned.Companies.map(company => company.Id)
		const assignedCompanyGroups = assigned.Groups.map(companyGroup => companyGroup.Id)

		const Parse = new Parser()

		return {
			Companies: [...companies.filter(company => company.RegisteredName && company.Id).map(company => Parse.company(company, false, assignedCompanies.includes(company.Id)))],
			CompanyGroups: [...companyGroups.filter(companyGroup => companyGroup.Name && companyGroup.Id).map(companyGroup => Parse.companyGroup(companyGroup, false, assignedCompanyGroups.includes(companyGroup.Id)))]
		}
	}

	setAssignedCompaniesAndGroups = async (Id: string, Companies: Array<string>, Groups: Array<string>): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/address/exchange/detail?companyID=${Id}`,
			onlyAuth: true,
			method: 'POST',
			data: {
				Companies,
				Groups
			}
		})
	}
}

export default AddressExchange