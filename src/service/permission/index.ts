import Service from '@/service/base'
import type { PermissionDTO } from './dto'
import type { PermissionModel } from './model'

class PermissionService extends Service {
	list = async (): Promise<Array<PermissionModel> | void> => {
		const response = await this.Request<Array<PermissionModel>>({
			url: 'admin/permission/list',
			onlyAuth: true
		})

		if(!response) return

		return response.filter(item => item.IsActive)
	}

	create = async ({ Name, Description }: PermissionDTO): Promise<Array<PermissionModel> | void> => {
		return await this.Request<Array<PermissionModel>>({
			onlyAuth: true,
			url: 'admin/permission',
			method: 'POST',
			data: {
				Name,
				Description,
				IsActive: true
			},
		})
	}

	update = async ({ Name, Description, Id, Value }: PermissionDTO): Promise<Array<PermissionModel> | void> => {
		return await this.Request<Array<PermissionModel>>({
			onlyAuth: true,
			url: 'admin/permission',
			method: 'PUT',
			data: {
				Name,
				Description,
				Id,
				Value
			},
		})
	}

	delete = async (Id: string): Promise<Array<PermissionModel> | void> => {
		return await this.Request<Array<PermissionModel>>({
			onlyAuth: true,
			url: `admin/permission/${Id}`,
			method: 'DELETE',
		})
	}

	detail = async (Id: string): Promise<PermissionModel | void> => {
		return await this.Request<PermissionModel>({
			url: `admin/permission/${Id}`,
			onlyAuth: true,
		})
	}
}

export default PermissionService