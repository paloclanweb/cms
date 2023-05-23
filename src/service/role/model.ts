export type RoleModel = {
    Id: string
    Name: string
    Description: string
    IsActive: boolean
    RoleGroup: string
}

export type DetailRoleModel = {
    Id: string
    Name: string
    Description: string
    IsActive: boolean
    RoleGroup: number
    Permissions: Array<{
        Id: string
        Name: string
        Description: string
      }>
  }