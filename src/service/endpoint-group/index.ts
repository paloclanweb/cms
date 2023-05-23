import Service from '@/service/base'
import type { EndpointGroupModel, EndpointDetailModel } from './model'
import type { EndpointGroupDTO } from './dto'
import { PermissionService, RoleService } from '@/service'
import { Parser } from '@/helpers'
import type { RolesAndPermissionList } from '@/types'

class EndpointService extends Service {
	list = async (): Promise<Array<EndpointGroupModel> | void> => {
		return await this.Request<Array<EndpointGroupModel>>({
			url: 'admin/endpoint/group/list',
			onlyAuth: true
		})
	}

	create = async ({ Name }: EndpointGroupDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/endpoint/group',
			onlyAuth: true,
			method: 'POST',
			data: {
				Name
			}
		})
	}
	update = async ({ Id, Name }: EndpointGroupDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/endpoint/group',
			onlyAuth: true,
			method: 'PUT',
			data: {
				Id,
				Name
			}
		})
	}

	delete = async (Id: string): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/endpoint/group/${Id}`,
			onlyAuth: true,
			method: 'DELETE',
		})
	}

	detail = async (Id: string): Promise<EndpointDetailModel | void> => {
		return await this.Request<EndpointDetailModel>({
			url: `admin/endpoint/eg/${Id}`,
			onlyAuth: true,
		})	
	}

	endpoints = async (Id: string) => {
		const response = await this.detail(Id)

		return response ? response.Endpoints : []
	}

	updateRoles = async (Id: string, Roles: Array<string>): Promise<void | boolean> => {
		return await this.Request<boolean>({
			url: `admin/endpoint/eg-sr/${Id}`,
			method: 'POST',
			onlyAuth: true,
			data: Roles
		})
	}

	updatePermissions = async (Id: string, Permissions: Array<string>): Promise<void | boolean> => {
		return await this.Request<boolean>({
			url: `admin/endpoint/eg-ao/${Id}`,
			method: 'POST',
			onlyAuth: true,
			data: Permissions
		})
	}

	getRolesAndPermissions = async (Id: string): Promise<RolesAndPermissionList> => {
		const Role = new RoleService()
		const Permission = new PermissionService()

		const [roles, permissions, details] = await Promise.all([Role.list(), Permission.list(), this.detail(Id)])

		if(!roles || !permissions || !details) {
			return {
				roles: [],
				permissions: []
			}
		}

		const Parse = new Parser()

		const assignedRoles = details.SimpleRoles.map(role => role.Id)
		const assignedPermissions = details.Permissions.map(permission => permission.Id)

		return {
			roles: [...roles.map(role => Parse.role(role, false, assignedRoles.includes(role.Id)))],
			permissions: [...permissions.map(permission => Parse.permission(permission, false, assignedPermissions.includes(permission.Id)))],
		}
	}

	setRolesAndPermissions = async (Id: string, Roles: Array<string>, Permissions: Array<string>): Promise<boolean> => {
		const [roles, permissions] = await Promise.all([this.updateRoles(Id, Roles), this.updatePermissions(Id, Permissions)])

		if(!roles || !permissions) {
			return false
		}

		return true
	}
}

export default EndpointService