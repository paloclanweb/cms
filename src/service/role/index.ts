import Service from '@/service/base'
import type { RoleModel, DetailRoleModel } from './model'
import type { RoleDTO } from './dto'
import { Parser } from '@/helpers'
import type { List } from '@/components'
import { PermissionService } from '@/service'

class RoleService extends Service {
	list = async (): Promise<Array<RoleModel> | void> => {
		const response = await this.Request<Array<RoleModel>>({
			url: 'admin/role/list',
			onlyAuth: true
		})

		if(!response) return

		return response.filter(item => item.IsActive)
	}

	create = async ({ RoleGroup, Description, Name }: RoleDTO): Promise<Array<RoleModel> | void> => {
		return await this.Request<Array<RoleModel>>({
			url: 'admin/role',
			onlyAuth: true,
			method: 'POST',
			data: {
				Name,
				Description,
				RoleGroup,
				IsActive: true
			}
		})
	}

	update = async ({ Id, RoleGroup, Name, Description, Permissions }: RoleDTO): Promise<Array<RoleModel> | void> => {
		return await this.Request<Array<RoleModel>>({
			url: 'admin/role',
			onlyAuth: true,
			method: 'PUT',
			data: {
				Id,
				RoleGroup,
				Name,
				Description,
				Permissions,
				IsActive: true,
			}
		})
	}

	delete = async (Id: string): Promise<Array<RoleModel> | void> => {
		return await this.Request<Array<RoleModel>>({
			url: `admin/role/${Id}`,
			onlyAuth: true,
			method: 'DELETE'
		})
	}

	permissions = async (Id: string): Promise<void | List> => {
		const response = await this.Request<Promise<DetailRoleModel>>({
			url: `admin/role/${Id}`,
			onlyAuth: true
		})

		if(!response) {
			return
		}

		const Permission = new PermissionService()
		const permissions = await Permission.list()

		if(!permissions) {
			return
		}

		const Parse = new Parser()

		return [...permissions.map(permission => Parse.permission(permission, false, [...response.Permissions.map(permission => permission.Id)].includes(permission.Id)))]
	}
}

export default RoleService