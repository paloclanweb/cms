import type { PermissionModel, RoleModel } from '@/service'

export type AdminModel = {
    Description: string
    Email: string
    FirstName: string
    Id: string
    IsActive: boolean
    IsAdmin: boolean
    IsLocked: boolean
    LastLoginAt: number
    LastLoginAttemptAt: number
    LastName: string
    Phone: string
}

export type AdminDetailModel = {
    AccessType: number
    CreatedAt: number
    Description: string
    Email: string
    FailedLoginCount: number
    FirstName: string
    Id: string
    IsActive: boolean
    IsAdmin: boolean
    IsLocked: boolean
    Language: string
    LastLoginAt: number
    LastLoginAttemptAt: number
    LastName: string
    Permissions: Array<string>
    Phone: string
    Roles: Array<string>
}