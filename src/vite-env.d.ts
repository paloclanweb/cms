/// <reference types="vite/client" />

import type { Palette, PaletteOptions } from '@mui/material/styles'

interface ImportMetaEnv {
    readonly NODE_ENV: string
    readonly VITE_NODE_ENV: string
    readonly VITE_SITE_TITLE: string
    readonly VITE_AUTH_API_PREFIX: string
    readonly VITE_MAIN_API_PREFIX: string
    readonly VITE_AUTH_API_URL: string
    readonly VITE_MAIN_API_URL: string
    readonly VITE_EXTEND_ESLINT: string
    readonly VITE_ABORT_TIME: number
    readonly VITE_UPLOAD_ABORT_TIME: number
    readonly VITE_CLIENT_SECRET_KEY: string
    readonly VITE_CLIENT_ID: string
    readonly VITE_CONSOLE_LOG: string
    readonly VITE_TRACE_PERMISSIONS: string
    readonly VITE_APP_VERSION: number
    readonly PORT: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '@mui/material/styles' {    
    interface Palette {
        primary: Palette['primary'];
        secondary: Palette['secondary'];
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        primary: PaletteOptions['primary'];
        secondary: PaletteOptions['secondary'];
        neutral: PaletteOptions['primary'];
    }
}
