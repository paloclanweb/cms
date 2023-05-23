import type { Dispatch, SetStateAction } from 'react'
import type { List } from '@/components'

export type CompaniesProps = {
    list: List
    setList: Dispatch<SetStateAction<List>>
    onClose: () => void
}