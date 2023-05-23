import type { ReactNode, Dispatch, SetStateAction } from 'react'

export type State = {
    activeLanguage: string,
    translations: {
        [key: string]: any
    }
    t: (translation: string) => string
}

export type Context = {
    translation: State
    setTranslation: Dispatch<SetStateAction<State>>
}

export type Provider = {
    children?: ReactNode
}
