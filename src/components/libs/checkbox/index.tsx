import { type FC, type ReactElement  } from 'react'
import { CheckboxProps } from './type'

import MuiCheckbox from '@mui/material/Checkbox'
import MuiFormGroup from '@mui/material/FormGroup'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

const Checkbox: FC<CheckboxProps> = ({ label, ...rest }: CheckboxProps): ReactElement => {
	return label ? (
		<MuiFormGroup>
			<MuiFormControlLabel label={label} sx={{
				alignItems: 'center'
			}} control={<MuiCheckbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} {...rest} />} />
		</MuiFormGroup>
	) :  (
		<MuiCheckbox {...rest} />
	)
}

export default Checkbox