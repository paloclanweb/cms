import {
	type FC,
	type ReactElement,
	type DragEvent,
	useCallback,
	useState,
} from 'react'
import { Container, DragContainer, Header, Title, Type, FilterButton } from './style'
import type { ListProps } from './type'
import { Grid, SearchInput, ButtonGroup, Checkbox, IconGrid } from '@/components'

const CheckboxList: FC<ListProps> = ({
	title = '',
	searchLabel = '',
	list = [],
	filters = [],
	onDragEnd = () => undefined,
	onDragStart = () => undefined,
	onDrop = () => undefined,
	onChange = () => undefined,
}: ListProps): ReactElement => {
	const [activeFilterIndex, setActiveFilterIndex] = useState<number>(0)
	
	const handleDrop = useCallback((event: DragEvent) => {
		event.preventDefault()
		onDrop(event)
	}, [onDrop])

	const onSearchHandler = useCallback((keyword: string) => {
		if(keyword.trim.length > 3)  {
			// todo: search
		}
	}, [])

	const onFilterHandler = useCallback((onFilter: () => void, index: number) => {
		setActiveFilterIndex(index)
		onFilter()
	}, [])

	return (
		<Container component={'section'}>
			<Header>
				<Grid container spacing={3} alignItems={'center'} justifyContent={'space-between'}>
					<Grid item>
						{filters.length > 0 && (
							<ButtonGroup>
								{filters.map((filter, index) => (
									<FilterButton 
										key={index} 
										onClick={() => onFilterHandler(filter.onClick, index)} 
										active={index === activeFilterIndex ? 1 : 0}
									> 
										{filter.label}
									</FilterButton>
								))}
							</ButtonGroup>
						)}
						{title && (
							<Title sx={{
								fontSize: '1.4rem'
							}}>{title}</Title>
						)}
					</Grid>
					<Grid item xs={7}>
						<SearchInput
							label={searchLabel}
							onChange={(event) => onSearchHandler(event.currentTarget.value)}
						/>
					</Grid>
				</Grid>
			</Header>
			<DragContainer onDrop={handleDrop} onDragOver={event => event.preventDefault()}>
				{list.map((item, index) => (
					<Grid key={index} container alignItems={'center'} paddingX={2} onDragStart={event => onDragStart(event, item)} draggable>
						<Grid item xs draggable>
							<Grid container alignItems={'center'} gap={2}>
								<Grid item draggable>
									<IconGrid />
								</Grid>
								<Grid item draggable>
									<Checkbox
										checked={item.isChecked}
										label={item.label}
										onChange={(event) => onChange(event, item)}
									/>
								</Grid>
							</Grid>
						</Grid>
						{item.type && (
							<Grid item draggable>
								<Type draggable textAlign={'right'}>{item.type}</Type>
							</Grid>
						)}
					</Grid>
				))}
			</DragContainer>
		</Container>
	)
}

export default CheckboxList
