import {type FC, type ReactElement, useCallback, useMemo} from 'react'
import {Box, Button, Grid, IconNextPage, IconPrevPage} from '@/components'
import type { PaginationProps } from './type'
import { PageButton } from './style'

const Pagination: FC<PaginationProps> = ({  paginationRange = [], onPageChange = () => undefined, currentPage = 1 }: PaginationProps): ReactElement => {

	const lastPage: string | number = useMemo(() => {
		return paginationRange[paginationRange.length - 1]
	}, [paginationRange])

	const onNext = useCallback(() => {
		onPageChange(currentPage + 1)
	}, [currentPage])

	const onPrevious = useCallback(() => {
		onPageChange(currentPage - 1)
	}, [currentPage])

	return (
		<Grid container alignItems={'center'} justifyContent={'flex-end'}>
			<Grid item>
				<PageButton disabled={currentPage === 1} onClick={onPrevious}>
					<IconPrevPage />
				</PageButton>
			</Grid>

			{paginationRange.map((pageNumber) => {
				if (pageNumber === '...') {
					return (
						<Grid item key={pageNumber}>
							<Box>&#8230;</Box>
						</Grid>
					)
				}

				return (
					<Grid item key={pageNumber}>
						<PageButton active={pageNumber === currentPage ? 1 : 0} onClick={() => onPageChange(pageNumber as number)}>{pageNumber}</PageButton>
					</Grid>
				)
			})}
			<Grid item>
				<PageButton disabled={lastPage === currentPage} onClick={onNext}>
					<IconNextPage />
				</PageButton>
			</Grid>
		</Grid>
	)
}

export default Pagination