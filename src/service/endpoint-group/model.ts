export type EndpointGroupModel = {
    Id: string
    Name: string
}

export type EndpointDetailModel = {
    Endpoints: Array<{
        Id: string
        Method: number
        Path: string
        Description: string
    }>,
    Permissions: Array<{
        Id: string
        Name: string
        Description: string
    }>,
    SimpleRoles: Array<{
        Id: string
        Name: string
        Description: string
    }>
}