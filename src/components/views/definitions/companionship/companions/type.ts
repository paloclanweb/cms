import type { Dispatch, SetStateAction } from 'react'
import type { CompanionList } from '@/types'

export type CompanionionsProps = {
    selectedCompanyId: string
    title: string
    open: boolean
    list: CompanionList
    setList: Dispatch<SetStateAction<CompanionList>>
    onClose: () => void
}