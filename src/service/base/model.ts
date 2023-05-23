export type ErrorModel = {
    Errors: {
        ActivityId: string | null
        HasErrors: boolean
        Items: []
        Message: string
    }
    HasErrors: boolean
    IsSuccessful: boolean
    Value: null
}