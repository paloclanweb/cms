import type { Dispatch, SetStateAction } from 'react'

export type PaginationProps = {
    paginationRange?: (number | string)[]
    currentPage?: number
    onPageChange?: Dispatch<SetStateAction<number>>
}