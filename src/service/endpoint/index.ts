import Service from '@/service/base'
import type { EndpointModel, DetailEndpointModel } from './model'
import type { EndpointDTO } from './dto'
import { Parser } from '@/helpers'
import { RoleService, PermissionService, EndpointGroupService } from '@/service'
import { type List } from '@/components'
import type { RolesAndPermissionList } from '@/types'

class EndpointService extends Service {
	list = async (): Promise<Array<EndpointModel> | void> => {
		return await this.Request<Array<EndpointModel>>({
			url: 'admin/endpoint/list',
			onlyAuth: true
		})
	}

	create = async ({ Path, Method, Description }: EndpointDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/endpoint',
			onlyAuth: true,
			method: 'POST',
			data: {
				Path,
				Method,
				Description
			}
		})
	}
	update = async ({ Id, Path, Method, Description }: EndpointDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/endpoint',
			onlyAuth: true,
			method: 'PUT',
			data: {
				Id,
				Path,
				Method,
				Description
			}
		})
	}

	delete = async (Id: string): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/endpoint/${Id}`,
			onlyAuth: true,
			method: 'DELETE',
		})
	}
	
	detail = async (Id: string): Promise<DetailEndpointModel | void> => {
		return await this.Request<DetailEndpointModel>({
			url: `admin/endpoint/ep/${Id}`,
			onlyAuth: true
		})
	}

	groups = async (Id: string): Promise<List> => {
		const EndpointGroup = new EndpointGroupService()
		const Parse = new Parser()
		const [detail, groups] = await Promise.all([this.detail(Id), EndpointGroup.list()])

		if(!detail || !groups) {
			return []
		}

		const assignedGroups = detail.EndpointGroups.map(group => group.Id)

		return groups.map(group => Parse.endpointGroup(group, false, assignedGroups.includes(group.Id)))
	}

	updateRoles = async (Id: string, Roles: Array<string>): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/endpoint/ep-sr/${Id}`,
			onlyAuth: true,
			method: 'POST',
			data: Roles
		})
	}

	updatePermissions = async (Id: string, Permissions: Array<string>): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/endpoint/ep-ao/${Id}`,
			onlyAuth: true,
			method: 'POST',
			data: Permissions
		})
	}

	updateGroups = async (Id: string, EndpointGroupsId: Array<string>): Promise<void | boolean> => {
		return await this.Request<boolean>({
			url: `admin/endpoint/ep-eg/${Id}`,
			method: 'POST',
			onlyAuth: true,
			data: EndpointGroupsId
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