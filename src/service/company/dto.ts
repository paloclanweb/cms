export type CompanyDTO = {
    Id?: string
    CompanyType: number
    OwnershipType: number
    Email: string
    Phone: string
    RegisteredCompanyName: string
    VatNumber: string
    Password?: string
    Password2?: string
    FirstName: string
    LastName: string
}

export type CompanyLoginDTO = {
    Email: string
    UserId: string
}