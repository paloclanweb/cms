import { type FC, type ReactElement } from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@mui/material'
import {SelectProps} from './type'

const Select: FC<SelectProps> = ({ id, options = [], value, label, required = false, disabled = false, onChange = () => undefined, ...rest }: SelectProps): ReactElement => {
	return (
		<FormControl fullWidth>
			<InputLabel id={`${id}-label`}>{label}</InputLabel>
			<MuiSelect
				labelId={`${id}-label`}
				id={id}
				value={value}
				label={label}
				required={required}
				disabled={disabled}
				{...rest}
			>
				{options.map((option, index) => (
					<MenuItem onClick={() => onChange(option)} key={index} value={option.value}>{option.label}</MenuItem>
				))}
			</MuiSelect>
		</FormControl>
	)
}

export default Select