import type { SelectProps as MuiSelectProps } from '@mui/material'

export type Option = {
    value: string | number
    label: string
}

export type SelectProps = {
    onChange?: (option: Option) => void
    options: Array<Option>
} & MuiSelectProps