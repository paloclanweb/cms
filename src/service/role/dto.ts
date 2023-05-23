export type RoleDTO = {
    Id?: string
    Name: string
    Description: string
    RoleGroup: number
    IsActive?: boolean
    Permissions?: Array<string>
  }