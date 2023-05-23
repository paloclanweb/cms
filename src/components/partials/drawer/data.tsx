import { Route } from '@/constant'

import {
	IconAddress,
	IconCommunity,
	IconCompanies,
	IconCompanionship,
	IconDot,
	IconKey,
	IconMessage,
	IconUsersLarge,
	IconWeb,
	IconMenu,
	IconAPIKey,
} from '@/components'

const data = [
	{
		title: 'SECURITY',
		menu: [
			{
				id: 'admin-user',
				title: 'Admin Users',
				icon: <IconUsersLarge width={40} height={40} fill={'#ffffff'}/>,
				url: Route.Security.AdminUsers.list
			},
			{
				id: 'dynamic-menu',
				title: 'Dynamic Menu',
				icon: <IconMenu/>,
				url: Route.Security.DynamicMenu.list
			},
			{
				id: 'web',
				title: 'Web',
				icon: <IconWeb/>,
				children: [
					{
						id: 'web',
						url: Route.Security.Web.Permissions.list,
						title: 'Permissions',
						icon: <IconDot/>
					},
					{
						id: 'web',
						url: Route.Security.Web.Roles.list,
						title: 'Roles',
						icon: <IconDot/>
					}
				]
			},
			{
				id: 'endpoints',
				title: 'Endpoints',
				icon: <IconKey/>,
				children: [
					{
						id: 'endpoints',
						url: Route.Security.Endpoints.Groups.list,
						title: 'Groups',
						icon: <IconDot/>
					},
					{
						id: 'endpoints',
						url: Route.Security.Endpoints.Permissions.list,
						title: 'Permissions',
						icon: <IconDot/>
					}
				]
			},
			{
				id: 'api-key',
				url: Route.Security.ApiKeys.list,
				title: 'API Keys',
				icon: <IconAPIKey/>
			}
		]
	},
	{
		title: 'DEFINITIONS',
		menu: [
			{
				id: 'web-user',
				title: 'Web User',
				icon: <IconCommunity/>,
				url: Route.Definitions.WebUser.list,
			},
			{
				id: 'company',
				title: 'Companies',
				icon: <IconCompanies/>,
				url: Route.Definitions.Company.list,
			},
			{
				id: 'companionship',
				title: 'Companionship',
				icon: <IconCompanionship/>,
				url: Route.Definitions.Companionship.list,
			},
			{
				id: 'address-exchange',
				title: 'Address Exchange',
				icon: <IconAddress/>,
				children: [
					{
						id: 'address-exchange',
						title: 'Groups',
						icon: <IconDot/>,
						url: Route.Definitions.AddressExchange.CompanyGroup.list,
					},
					{
						id: 'address-exchange',
						title: 'Company List',
						icon: <IconDot/>,
						url: Route.Definitions.AddressExchange.Company.list,
					},
				]
			},
			{
				id: 'ready-messages',
				title: 'Ready Messages',
				icon: <IconMessage/>,
				url: Route.Definitions.ReadyMessages
			},
		]
	}
]

export default data