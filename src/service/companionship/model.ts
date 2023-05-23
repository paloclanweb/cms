export type CompanionShipModel = {
    Count?: {
        Driver: number | null
        TO: number | null
    }
    Id: string
    LogoId: string | null
    Name: string | null
    RegisteredCompanyName: string | null
    ShortName: string | null
    Type: number
}

export type CargoOwnerModel = {
    Id: string
    LogoId: string | null
    Name: string | null
    RegisteredCompanyName: string | null
    ShortName: string | null
    Type: number
}

export type TransporterOwnerModel = {
    Id: string
    LogoId: string | null
    Name: string | null
    RegisteredCompanyName: string | null
    ShortName: string | null
    Type: number
}

export type DriverModel = {
    Id: string
    FirstName: string | null
    MiddleName: string | null
    LastName: string | null
}

export type CompanionsModel = {
    CO: CargoOwnerModel
    Drivers: Array<DriverModel>
    TO: Array<TransporterOwnerModel>
}