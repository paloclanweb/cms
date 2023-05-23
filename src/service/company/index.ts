import Service from '@/service/base'
import type { CompanyModel, CompanyLoginModel } from './model'
import type { CompanyDTO, CompanyLoginDTO } from './dto'

class CompanyService extends Service {
	list = async (): Promise<Array<CompanyModel> | void> => {
		return await this.Request<Array<CompanyModel>>({
			url: 'admin/company/list',
			onlyAuth: true,
		})
	}

	create = async ({
		CompanyType,
		OwnershipType,
		RegisteredCompanyName,
		Phone,
		VatNumber,
		Email,
		FirstName,
		LastName,
		Password,
		Password2
	}: CompanyDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/company/register',
			onlyAuth: true,
			method: 'POST',
			data: {
				CompanyType,
				OwnershipType,
				RegisteredCompanyName,
				Phone,
				VatNumber,
				Email,
				FirstName,
				LastName,
				Password,
				Password2
			},
		})
	}

	update = async ({
		Id,
		CompanyType,
		OwnershipType,
		RegisteredCompanyName,
		Phone,
		VatNumber,
		Email,
		FirstName,
		LastName,
	}: CompanyDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/company/register',
			onlyAuth: true,
			method: 'PUT',
			data: {
				Id,
				CompanyType,
				OwnershipType,
				RegisteredCompanyName,
				Phone,
				VatNumber,
				Email,
				FirstName,
				LastName,
			},
		})
	}

	delete = async (Id: string) => {
		return await this.Request<boolean>({
			url: `admin/company/${Id}`,
			onlyAuth: true,
			method: 'DELETE',
		})
	}

	login = async ({ Email, UserId }: CompanyLoginDTO): Promise<CompanyLoginModel | void> => {
		return await this.Request<CompanyLoginModel>({
			url: 'admin/compliance/user/token/renew',
			onlyAuth: true,
			method: 'POST',
			data: {
				Email,
				UserId
			}
		})
	}
}

export default CompanyService
