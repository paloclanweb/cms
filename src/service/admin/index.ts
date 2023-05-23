import Service from '../base'
import type { AdminModel, AdminDetailModel } from './model'
import type { AdminDTO } from './dto'
import { RoleService, PermissionService } from '@/service'
import type { RolesAndPermissionList } from '@/types'
import { Parser } from '@/helpers'

class AdminService extends Service {
	list = async (): Promise<Array<AdminModel> | void> => {
		const response = await this.Request<Array<AdminModel>>({
			url: 'admin/User/list',
			onlyAuth: true
		})

		if(!response) return

		return response.filter(item => item.IsActive)
	}

	create = async ({ FirstName, LastName, Email, Phone, Description, Password, PasswordAgain }: AdminDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/User',
			method: 'PUT',
			onlyAuth: true,
			data: {
				FirstName,
				LastName,
				Email,
				Phone,
				Description,
				Password,
				PasswordAgain,
				IsActive: true,
				IsLocked: false,
			}
		})
	}

	update = async ({ FirstName, LastName, Email, Phone, Description, Id }: AdminDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/User',
			method: 'POST',
			onlyAuth: true,
			data: {
				Id,
				FirstName,
				LastName,
				Email,
				Phone,
				Description,
				IsActive: true,
				IsLocked: false,
			}
		})
	}

	delete = async (Id: string): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/User/${Id}`,
			method: 'DELETE',
			onlyAuth: true,
		})
	}

	detail = async (Id: string): Promise<AdminDetailModel | void> => {
		return await this.Request<AdminDetailModel>({
			url: `admin/User/${Id}`,
			onlyAuth: true,
		})
	}

	rolesAndPermissions = async (Id: string): Promise<RolesAndPermissionList> => {
		const Parse = new Parser()
		const Roles = new RoleService()
		const Permission = new PermissionService()
		const [detail, roles, permissions] = await Promise.all([this.detail(Id), Roles.list(), Permission.list()])

		if(!roles || !permissions || !detail) {
			return {
				roles: [],
				permissions: []
			}
		}

		return {
			roles: [...roles.map(role => Parse.role(role, false, detail.Roles.includes(role.Id)))],
			permissions: [...permissions.map(permision => Parse.permission(permision, false, detail.Permissions.includes(permision.Id)))],
		}
	}

	setPermissions = async (Id: string, Permissions: Array<string>): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/User/permissions',
			method: 'POST',
			onlyAuth: true,
			data: {
				UserId: Id,
				Permissions,
			}
		})
	}

	setRoles = async (Id: string, Roles: Array<string>): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/User/roles',
			method: 'POST',
			onlyAuth: true,
			data: {
				UserId: Id,
				Roles,
			}
		})
	}
}

export default AdminService