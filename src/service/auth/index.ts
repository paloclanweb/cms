import Service from '@/service/base'
import type {LoginDTO} from './dto'
import type {LoginModel} from './model'

class AuthService extends Service {
	clientId = import.meta.env.VITE_CLIENT_ID
	secretKey = import.meta.env.VITE_CLIENT_SECRET_KEY
	clientType = 1

	login = async ({password, email}: LoginDTO): Promise<LoginModel | void> => {
		const {clientType, clientId, secretKey} = this

		return await this.Request<LoginModel>({
			url: 'auth/token/auth',
			data: {
				Username: email,
				Password: password,
				ApiClientId: clientId,
				ClientSecretKey: secretKey,
				ClientType: clientType,
			},
			method: 'POST'
		})
	}

	forgotPassword = async (email: string): Promise<void | boolean> => {
		const {clientType, clientId, secretKey} = this
		
		return await this.Request<boolean>({
			url: 'auth/token/auth',
			method: 'POST',
			data: {
				ApiClientId: clientId,
				ClientSecretKey: secretKey,
				ClientType: clientType,
				Username: email
			}
		})
	}
}

export default AuthService