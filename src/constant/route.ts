import { ROUTE } from '@/enums'

export default {
	NotAuthorized: '/not-authorized',
	Auth: {
		ForgotPassword: '/auth/forgot-password',
		Login: '/auth/login',
		ResetPassword: '/auth/reset-password',
		Agreement: (language: string, step: number): string => `/auth/agreement/${language}/${step}`
	},
	Security: {
		Web: {
			Permissions: {
				list: `/security/web/permission/${ROUTE.LIST}`,
				create: `/security/web/permission/${ROUTE.CREATE}`,
				update: (id: string): string => `/security/web/permission/${ROUTE.UPDATE}/${id}`,
				delete: (id: string): string => `/security/web/permission/${ROUTE.DELETE}/${id}`,
			},
			Roles: {
				list: `/security/web/role/${ROUTE.LIST}`,
				create:  `/security/web/role/${ROUTE.CREATE}`,
				update: (id: string): string => `/security/web/role/${ROUTE.UPDATE}/${id}`,
				delete: (id: string): string => `/security/web/role/${ROUTE.DELETE}/${id}`,
				permissions: (id: string): string => `/security/web/role/${ROUTE.PERMISSIONS}/${id}`,
			},
		},
		Endpoints: {
			Permissions: {
				list: `/security/endpoint/permission/${ROUTE.LIST}`,
				create: `/security/endpoint/permission/${ROUTE.CREATE}`,
				update: (id: string): string => `/security/endpoint/permission/${ROUTE.UPDATE}/${id}`,
				delete: (id: string): string => `/security/endpoint/permission/${ROUTE.DELETE}/${id}`,
				groups: (id: string): string => `/security/endpoint/permission/${ROUTE.GROUPS}/${id}`,
				rolesAndPermissions: (id: string): string => `/security/endpoint/permission/${ROUTE.ROLES_AND_PERMISSIONS}/${id}`,
			},
			Groups: {
				list: `/security/endpoint/group/${ROUTE.LIST}`,
				create: `/security/endpoint/group/${ROUTE.CREATE}`,
				update: (id: string): string => `/security/endpoint/group/${ROUTE.UPDATE}/${id}`,
				delete: (id: string): string =>  `/security/endpoint/group/${ROUTE.DELETE}/${id}`,
				endpoints: (id: string): string => `/security/endpoint/group/${ROUTE.ENDPOINTS}/${id}`,
				rolesAndPermissions: (id: string): string => `/security/endpoint/group/${ROUTE.ROLES_AND_PERMISSIONS}/${id}`,
			},
		},
		AdminUsers: {
			list: `/security/admin-user/${ROUTE.LIST}`,
			create: `/security/admin-user/${ROUTE.CREATE}`,
			update: (id: string): string => `/security/admin-user/${ROUTE.UPDATE}/${id}`,
			delete: (id: string): string => `/security/admin-user/${ROUTE.DELETE}/${id}`,
			rolesAndPermissions: (id: string): string => `/security/admin-user/${ROUTE.ROLES_AND_PERMISSIONS}/${id}`,
			changePassword: (id: string) => `/security/admin-user/${ROUTE.CHANGE_PASSWORD}/${id}`,
		},
		ApiKeys: {
			list: `/security/api-key/${ROUTE.LIST}`,
			create: `/security/api-key/${ROUTE.CREATE}`,
			delete: (id: string): string => `/security/api-key/${ROUTE.DELETE}/${id}`,
		},
		DynamicMenu: {
			list: `/security/dynamic-menu/${ROUTE.LIST}`,
			create: `/security/dynamic-menu/${ROUTE.CREATE}`,
			update: (id: string): string => `/security/dynamic-menu/${ROUTE.UPDATE}/${id}`,
			delete: (id: string): string => `/security/dynamic-menu/${ROUTE.DELETE}/${id}`,
		},
	},
	Definitions: {
		WebUser: {
			list: `/definitions/web-user/${ROUTE.LIST}`,
			delete: (id: string): string => `/definitions/web-user/${ROUTE.DELETE}/${id}`,
		},
		Company: {
			list: `/definitions/company/${ROUTE.LIST}`,
			create: `/definitions/company/${ROUTE.CREATE}`,
			update: (id: string): string => `/definitions/company/${ROUTE.UPDATE}/${id}`,
			users: (id: string): string => `/definitions/company/${ROUTE.USERS}/${id}`,
			delete: (id: string): string => `/definitions/company/${ROUTE.DELETE}/${id}`,
			detail: (id: string): string => `/definitions/company/${ROUTE.DETAIL}/${id}`,
		},
		Companionship: {
			list: `/definitions/companionship/${ROUTE.LIST}`,
			create: `/definitions/companionship/${ROUTE.CREATE}`,
			update: (id: string): string => `/definitions/companionship/${ROUTE.UPDATE}/${id}`,
			companions: (id: string): string => `/definitions/companionship/${ROUTE.COMPANIONS}/${id}`,
		},
		AddressExchange: {
			Company: {
				list:  `/definitions/address-exchange/company/${ROUTE.LIST}`,
				create:  `/definitions/address-exchange/company/${ROUTE.CREATE}`,
				companies: (id: string): string => `/definitions/address-exchange/company/${ROUTE.COMPANIES}/${id}`,
			},
			CompanyGroup: {
				list: `/definitions/address-exchange/company-group/${ROUTE.LIST}`,
				create: `/definitions/address-exchange/company-group/${ROUTE.CREATE}`,
				update: (id: string): string => `/definitions/address-exchange/company-group/${ROUTE.UPDATE}/${id}`,
				companies: (id: string): string => `/definitions/address-exchange/company-group/${ROUTE.COMPANIES}/${id}`,
			},
		},
		ReadyMessages: '/definitions/ready-messages',
	}
}