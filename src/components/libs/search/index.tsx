import {type FC, type ReactElement} from 'react'
import type { SearchProps } from './type'
import {Input, IconSearch} from '@/components'
import {InputAdornment, IconButton } from '@mui/material'

const Search: FC<SearchProps> = ({ value, onChange = () => undefined, label }: SearchProps): ReactElement => {
	return (
		<Input
			type={'text'}
			fullWidth
			label={label}
			variant={'outlined'}
			color={'primary'}
			sx={{
				margin: 0,
			}}
			onChange={(event) => onChange(event)}
			value={value}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							edge="end"
						>
							<IconSearch />
						</IconButton>
					</InputAdornment>
				)
			}}
		/>
	)
}

export default Search