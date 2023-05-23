import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material'

type Input = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type InputProps = Input & MuiTextFieldProps