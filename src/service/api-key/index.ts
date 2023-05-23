import Service from '@/service/base'
import type { APIKeyModel } from './model'
import type { APIKeyDTO } from './dto'

class APIKeyService extends Service {
	list = async (): Promise<void | Array<APIKeyModel>> => {
		return await this.Request<Array<APIKeyModel>>({
			url: 'admin/TokenAdmin/list',
			onlyAuth: true
		})
	}

	create = async ({ Description, ExpirationAt }: APIKeyDTO): Promise<void> => {
		return await this.Request({
			url: 'admin/TokenAdmin/create',
			method: 'POST',
			onlyAuth: true,
			data: {
				Description,
				ExpirationAt
			}
		})
	}
}

export default APIKeyService