import Service from '@/service/base'
import type {WebUserModel} from './model'

class WebUserService extends Service {
	list = async (): Promise<WebUserModel | void> => {
		const initialValue = {
			PageIndex: 0,
    		TotalCount: 0,
    		Rows: []
		}

		const response = await this.Request<WebUserModel>({
			url: 'admin/Compliance/User/list',
			onlyAuth: true,
			method: 'POST',
			data: {
				Filters: [],
				PageIndex: 0,
				PageSize: 0
			}
		})

		if(!response) {
			return initialValue
		}

		return {
			...response,
			Rows: response.Rows.filter(item => item.IsActive)
		}
	}

	loginAs = async () => {
		return await this.Request({

		})
	}
}

export default WebUserService