import { type FC, type  ReactElement } from 'react'
import Router from '@/router'
import Theme from '@/theme'
import { TranslationsProvider, ToastProvider } from '@/context'
const App: FC = (): ReactElement => {
	return (
		<TranslationsProvider>
			<Theme>
				<ToastProvider>
					<Router />
				</ToastProvider>
			</Theme>
		</TranslationsProvider>
	)
}

export default App
