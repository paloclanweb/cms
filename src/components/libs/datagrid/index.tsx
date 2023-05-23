import {
	type FC, 
	type ReactElement, 
	type MouseEvent, 
	Fragment,
	useState,
	useMemo,
	useCallback
} from 'react'
import {
	Container,
	Header,
	DataGridContainer,
	GridActionButton,
	GridContent,
	GridHeader,
} from './style'
import type {DataGridProps, Content} from './type'
import {IconMore, Grid, Search} from '@/components'
import {usePagination} from '@/hooks'
import Pagination from './pagination'
import Actions from './actions'

const pageSize = 20
const siblingCount = 3

const DataGrid: FC<DataGridProps> = ({ 
	content = [], 
	headers = [], 
	actions = [],
	onSearch = () => undefined,
	children
}: DataGridProps): ReactElement => {
	const [currentPage, onPageChange] = useState<number>(1)
	const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null)
	const [selectedId, setSelectedId] = useState<string | null>(null)

	const paginationRange = usePagination({
		currentPage,
		totalCount: content.length,
		siblingCount,
		pageSize,
	})

	const currentContent: Array<Content> = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageSize
		const lastPageIndex = firstPageIndex + pageSize
		return content.slice(firstPageIndex, lastPageIndex)
	}, [currentPage, content, pageSize])

	const onActionHandler = useCallback((event: MouseEvent<HTMLButtonElement>, id: string): void => {
		setAnchorEl(event.currentTarget)
		setSelectedId(id)
	}, [])

	return (
		<Grid container justifyContent={'center'}>
			<Grid item>
				<Container component={'section'}>
					{children && (
						<Header component={'header'}>{children}</Header>
					)}
					<Search onSearch={onSearch}/>
					<DataGridContainer component={'main'} column={(headers?.length || 0) + 1}>
						{headers?.length > 0 && (
							<>
								{headers.map((header, index) => (
									<GridHeader key={index}>{header.headerName}</GridHeader>
								))}
								<GridHeader>-</GridHeader>
							</>
						)}
						{currentContent.map((item, index) => (
							<Fragment key={index}>
								{headers.map((header, headerIndex) => (
									<GridContent key={headerIndex}>{item[header.field]}</GridContent>
								))}
								<GridActionButton onClick={(event) => onActionHandler(event, item.Id)}>
									<IconMore/>
								</GridActionButton>
							</Fragment>
						))}

						{selectedId && (
							<Actions
								setAnchorEl={setAnchorEl}
								anchorEl={anchorEl}
								actions={actions}
								selectedId={selectedId}
							/>
						)}
					</DataGridContainer>
					{paginationRange.length > 0 && (
						<Pagination paginationRange={paginationRange} currentPage={currentPage} onPageChange={onPageChange}/>
					)}
				</Container>
			</Grid>
		</Grid>
	)
}

export default DataGrid