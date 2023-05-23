import { createContext, useState, type FC, type ReactElement } from 'react'
import type { Provider, State, Context } from './type'
import Translations from '@/translations'

const initialState: State = {
	activeLanguage: 'tr',
	translations: Translations,
	t: () => '',
}

export const TranslationsContext= createContext<Context>({
	translation: initialState,
	setTranslation: () => undefined,
})

export const TranslationsProvider: FC<Provider> = ({ children}): ReactElement => {
	const [translation, setTranslation] = useState<State>(initialState)

	return (
		<TranslationsContext.Provider value={{
			translation,
			setTranslation,
		}}>
			{children}
		</TranslationsContext.Provider>
	)
}
