export type AdminUser = {
    CompanyId: string
    Email: string
    FirstName: string
    Id: string
    LastLoginAt: null | number
    LastName: string
    MiddleName: string | null
    Phone: string | null
}

export type CompanyModel = {
    AdminUsers: Array<AdminUser>
    Id: string
    RegisteredName: string
    VATNumber: string
    VATOffice: string
}

export type CompanyLoginModel = {
    Email: string
    ExpirationAt: number
    HashValue: string
    UserId: string
}