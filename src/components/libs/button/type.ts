import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import type { ButtonProps as MuiButtonProps } from '@mui/material'

type Button = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonProps = Button & MuiButtonProps