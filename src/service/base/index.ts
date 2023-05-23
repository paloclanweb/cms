import { Cookie, Parser } from '@/helpers'
import type { ConfigDTO } from './dto'

class Service {
	baseURL = import.meta.env.VITE_MAIN_API_URL

	Request = async <T>(config: ConfigDTO): Promise<T | void> => {
		const BrowserCookie = new Cookie()
		const axios = (await (import('axios'))).default
		const { baseURL } = this
		const token: string | null = BrowserCookie.get('token')

		if(!token && config.onlyAuth) {
			return
		}

		if(token && config.onlyAuth) {
			const Parse = new Parser()
			const decodedToken = Parse.token(token)

			if(!decodedToken.email) {
				return
			}
		}

		try {
			const response = await axios({
				method: config.method ||  'GET',
				baseURL: config.baseURL || baseURL,
				...config,
				headers: {
					'Authorization': `bearer ${token || ''}`,
					'Content-Type': 'application/json',
					...config.headers
				},
				data: typeof config.data === 'string' ? config.data : JSON.stringify(config.data),
			})

			return response.data
		} catch (error) {
			console.error(error)
		}
	}
}

export default Service
