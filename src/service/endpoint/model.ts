import type { RolesAndPermissionList } from '@/types'
import type { List } from '@/components'

export type EndpointModel = {
    Id: string
    Method: number
    Path: string
    Description: string
}

export type DetailEndpointModel = {
    EndpointGroups: Array<{
        Id: string
        Name: string
    }>
    Permissions: Array<{
        Id: string
        Name: string
        Description: string
    }>
    SimpleRoles: Array<{
        Id: string
        Name: string
        Description: string
    }>
}

export type EndpointRelations = {
    groups: List
} & RolesAndPermissionList