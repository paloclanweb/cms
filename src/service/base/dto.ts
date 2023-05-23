import type { AxiosRequestConfig} from 'axios'

export type ConfigDTO = {
    onlyAuth?: boolean
} & AxiosRequestConfig