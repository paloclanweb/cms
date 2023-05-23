import { type FC, type ReactElement, useState, useMemo, useCallback } from 'react'
import { InputAdornment } from '@mui/material'
import type { DatePickerProps, State } from './type'
import { Container, DropdownContainer, Weeks, Week, CurrentDateContainer, CurrentDate, Days, Day } from './style'
import { Input, Grid, Button, IconChevron, IconButton, IconCalendar } from '@/components'

const DatePicker: FC<DatePickerProps> = (): ReactElement => {
	const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
	const [date] = useState<State>({
		day: new Date().getDate(),
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	})

	const isLeapYear = useCallback((year: number): boolean => {
		return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
	}, [])
	  
	const daysInMonth = [
		31, // January
		isLeapYear(new Date().getFullYear()) ? 29 : 28, // February
		31, // March
		30, // April
		31, // May
		30, // June
		31, // July
		31, // August
		30, // September
		31, // October
		30, // November
		31  // December
	]

	const months = useMemo(() => {
		return [
			'January',
			'February',
			'March',
			'April',
			'May',
			'Jun',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
	}, [])

	const days = useMemo(() => {
		return [
			'MONDAY',
			'TUESDAY',
			'WEDNESDAY',
			'THURSDAY',
			'FRIDAY',
			'SATURDAY',
			'SUNDAY'
		]
	}, [])

	const weeks = useMemo(() => {
		return [
			{
				name: 'Today',
			},
			{
				name: 'Tomorrow',
			},
			{
				name: '15 Days',
			},
			{
				name: '30 Days',
			}
		]
	}, [])

	const handleClickShowDatePicker = useCallback((): void => {
		setShowDatePicker(!showDatePicker)
	}, [showDatePicker])

	const handleMouseDownDatePicker = useCallback(() => {
		setShowDatePicker(!showDatePicker)
	}, [showDatePicker])

	const weekList = useMemo((): ReactElement => {
		return (
			<Weeks>
				{weeks.map((week, index) => (
					<Week key={index} fullWidth variant={'text'}>
						{week.name}
					</Week>
				))}
			</Weeks>
		)
	}, [weeks])

	const dayList = useMemo((): ReactElement => {
		return (
			<Days>
				{days.map((day, index) => (
					<Day key={index}>{day.slice(0, 3)}</Day>
				))}
				{[...Array(daysInMonth[date.month])].map((_, index) => (
					<Day key={index} passive={(index + 1) < date.day}>
						{index + 1}
					</Day>
				))}
			</Days>
		)
	}, [days, daysInMonth])

	const selectedDate = useMemo((): ReactElement => {
		return (
			<CurrentDateContainer>
				<Grid container alignItems={'center'} justifyContent={'center'}>
					<Grid item>
						<Button>
							<IconChevron
								width={16}
								height={16}
								fill={'#C6CAD2'}
								style={{
									transform: 'rotate(90deg)',
									transformOrigin: 'center'
								}}
							/>
						</Button>
					</Grid>
					<Grid item>
						<CurrentDate>{`${months[date.month]} ${date.year}`}</CurrentDate>
					</Grid>
					<Grid item>
						<Button>
							<IconChevron
								width={16}
								height={16}
								fill={'#C6CAD2'}
								style={{
									transform: 'rotate(-90deg)',
									transformOrigin: 'center'
								}}
							/>
						</Button>
					</Grid>
				</Grid>
			</CurrentDateContainer>
		)
	}, [date, months])

	return (
		<Container>
			<Grid container  gap={3}>
				<Grid item xs>
					<Input
						fullWidth
						label={'Expires at'}
						type={'text'}
						value={`${date.day}.${date.month + 1}.${date.year}`}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowDatePicker}
										onMouseDown={handleMouseDownDatePicker}
										edge="end"
									>
										<IconCalendar width={24} height={24} fill={'#7B8499'} />
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				</Grid>
				<Grid item xs={2}>
					<Input
						type={'text'}
						fullWidth
						label={'HH'}
						variant={'outlined'}
						color={'primary'}
					/>
				</Grid>
				<Grid item xs={2}>
					<Input
						type={'text'}
						fullWidth
						label={'MM'}
						variant={'outlined'}
						color={'primary'}
					/>
				</Grid>
			</Grid>
			{showDatePicker && (
				<DropdownContainer>
					<Grid container>
						<Grid item xs={'auto'}>
							{weekList}
						</Grid>
						<Grid item xs>
							{selectedDate}
							{dayList}
						</Grid>
					</Grid>
				</DropdownContainer>
			)}
		</Container>
		
	)
}

export default DatePicker