export type LoginModel = {
    AccessToken: string
    ExpiresIn: number
    RefreshToken: string
    Permissions: null,
    OwnershipType: null,
    IsEmailConfirmed: boolean,
    LanguageCode: string
    IsRegistrationCompleted: true,
    IsNewCompany: boolean,
    RegistrationStates: Array<any>,
    Impersonations: null,
    ESignStatus: null,
    DeviceAppId: null,
    Settings: any
}

export type TokenModel = {
    amr: string
    aud: string
    companyId: string
    companyName: string
    email: string
    exp: number
    fullName: string
    iat: string
    isCO: string
    iss: string
    jti: string
    nameid: string
    nbf: number
    sub: string
}