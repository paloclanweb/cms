import {type FC, type ReactElement } from 'react'
import {Container, Title, Badge } from './style'
import type { MultiSelectModalProps } from './type'
import {Modal, Grid, Button, CheckboxList, IconCaretDown, IconCaretUp } from '@/components'

const MultiSelectModal: FC<MultiSelectModalProps> = ({ 
	searchLabel = '', 
	title,
	tip, 
	open = false,
	list = [],
	listTitle,
	selected,
	selectedTitle = '',
	filters = [],
	onClose = () => undefined, 
	onSave = () => undefined,
	onAdd,
	onChange,
	onDragStart,
	onDrop,
	onRemove,
}: MultiSelectModalProps): ReactElement => {
	return (
		<Modal open={open} onClose={onClose} width={'50%'}>
			<Container>
				{title && <Title>{title}</Title>}
				{tip && (
					<Badge>{tip}</Badge>
				)}
				<CheckboxList
					list={selected}
					searchLabel={searchLabel}
					title={selectedTitle}
					onChange={onChange}
					onDragStart={onDragStart}
					onDrop={(event) => onDrop(event, true)}
				/>
				<Grid container spacing={3} alignItems={'center'} justifyContent={'center'}>
					<Grid item>
						<Button onClick={onAdd}>
							<IconCaretUp fill={'#D7DAE0'} />
						</Button>
					</Grid>
					<Grid item>
						<Button onClick={onRemove}>
							<IconCaretDown fill={'#D7DAE0'} />
						</Button>
					</Grid>
				</Grid>
				<CheckboxList
					title={listTitle}
					list={list}
					searchLabel={searchLabel}
					onChange={onChange}
					onDragStart={onDragStart}
					onDrop={(event) => onDrop(event, false)}
					filters={filters}
				/>
				
				<Grid container alignItems={'center'} justifyContent={'center'} columnGap={2} sx={{
					marginTop: '2rem'
				}}>
					<Grid item>
						<Button onClick={onClose} color={'primary'} variant={'outlined'} fullWidth>CANCEL</Button>
					</Grid>
					<Grid item>
						<Button onClick={onSave} color={'primary'} variant={'contained'} fullWidth>SAVE CHANGES</Button>
					</Grid>
				</Grid>
			</Container>
		</Modal>
	)
}

export default MultiSelectModal