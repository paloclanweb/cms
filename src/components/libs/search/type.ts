import type { ChangeEvent } from 'react'

export type SearchProps = {
    label?: string
    value?: string
    onChange?: (event: ChangeEvent<HTMLFormElement>) => void
}