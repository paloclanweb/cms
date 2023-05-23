export type State = {
    month: number
    year: number
    day: number
}

export type DatePickerProps = {
    onChange?: () => void
}

export type DayProps = {
    selected?: boolean
    passive?: boolean
}