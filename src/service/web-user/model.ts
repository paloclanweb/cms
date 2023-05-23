export type UserModel = {
    CompanyId: string | null
    CompanyName: string | null
    Email: string | null
    FirstName: string | null
    FullName: string
    Id: string
    IsAccountOwner: boolean
    IsActive: boolean
    IsCO: boolean
    IsDriver: boolean
    IsEmailConfirmed: boolean
    IsPhoneNumberConfirmed: boolean
    IsTO: boolean
    LastLoginAt: number
    LastName: string | null
    MiddleName: string | null
    PhoneNumber: string
}

export type WebUserModel = {
    PageIndex: number
    TotalCount: number
    Rows: Array<UserModel>
}