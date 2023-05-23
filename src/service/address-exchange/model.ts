export type AddressExchangeModel = {
    Id: string
    MasterCompanyId: string
    Name: string
    Count: {
        Companies: number
        Groups: number
    }
}

export type CompaniesAndGroups = {
    Companies: Array<{
        Id: string
        Name: string
    }>
    Groups: Array<{
        Id: string
        Name: string
    }>
}