import {useContext, useMemo, useCallback} from 'react'
import {TranslationsContext} from '@/context'

type TranslationsObject = {
    [key: string | number]: string | number | TranslationsObject
}

const changeVariablesInTranslation = (value: string, variables) => {
	for (const variable in variables) {
		value = value.replace(`{{ ${variable} }}`, variables[variable])
		value = value.replace(`{{${variable}}}`, variables[variable])
	}

	return value
}

const findTranslation = (keys: Array<string>, translations: TranslationsObject): string => {
	let value: string | number = ''

	keys.forEach((key) => {
		if(typeof translations[key] === 'string' || typeof translations[key] === 'number') {
			return value = translations[key] as string | number
		}

		if(typeof translations[key] === 'object') {
			return value = findTranslation(keys, translations[key] as TranslationsObject)
		}
	})

	return value
}

const Translations = () => {
	const { translation } = useContext(TranslationsContext)

	const t = useCallback((translationKey: string, variables?: TranslationsObject): string => {
		const keys: Array<string> = translationKey.split('.')
		const translations: TranslationsObject = translation.translations[translation.activeLanguage]
		const value = findTranslation(keys, translations)

		return changeVariablesInTranslation(value, variables)
	}, [translation])

	return useMemo(() => ({
		activeLanguage: translation.activeLanguage,
		translations: translation.translations,
		t,
	}), [translation])
}

export default Translations
