import { type FC, type ReactElement } from 'react'
import type { ThemeProps } from './types'
import { createTheme, ThemeProvider, GlobalStyles, type ThemeOptions } from '@mui/material'
import typography from './typography'
import breakpoints from './breakpoints'
import palette from './palette'
import styles from './styles'

const options: ThemeOptions = {
	breakpoints,
	palette,
	typography,
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					marginBottom: '1.2rem',
					borderRadius: '0.8rem',
					fontSize: '1.6rem'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					// padding: '0.8rem 0',
					fontSize: '1.5rem',
					borderRadius: '0.8rem'
				}
			}
		}
	}
}

const theme = createTheme(options)
const globalStyles = <GlobalStyles styles={styles} />

const Theme: FC<ThemeProps> = ({ children }: ThemeProps): ReactElement => {
	return (
		<ThemeProvider theme={theme}>
			{globalStyles}
			{children}
		</ThemeProvider>
	)
}

export default Theme