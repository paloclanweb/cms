import { Cookie, Parser } from '@/helpers'
import type { TokenModel } from '@/service/auth/model'

const User = (): TokenModel | void => {
	const BrowserCookie = new Cookie()
	const token = BrowserCookie.get('token')
	
	if(!token) {
		return
	}

	const Parse = new Parser()

	return Parse.token(token)
}

export default User