import Service from '@/service/base'
import type { DynamicMenuModel } from './model'
import type { DynamicMenuDTO } from './dto'

class DynamicMenuService extends Service {
	list = async (): Promise<Array<DynamicMenuModel> | void> => {
		return await this.Request<Array<DynamicMenuModel>>({
			url: 'admin/menu/list',
			onlyAuth: true,
		})
	}

	create = async ({
		AppId,
		Caption,
		Identifier,
		Order,
		ParentId,
		Route,
	}: DynamicMenuDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: 'admin/menu',
			method: 'POST',
			onlyAuth: true,
			data: {
				AppId,
				Caption,
				Identifier,
				Order: Order ? Order.toString() : "0",
				ParentId,
				Route,
			},
		})
	}

	update = async ({
		AppId,
		Caption,
		Id,
		Identifier,
		Order,
		ParentId,
		Route,
	}: DynamicMenuDTO): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/menu/${Id}`,
			method: 'PUT',
			onlyAuth: true,
			data: {
				AppId,
				Caption,
				Id,
				Identifier,
				Order,
				ParentId,
				Route,
			},
		})
	}

	delete = async (Id: string): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/menu/${Id}`,
			method: 'DELETE',
			onlyAuth: true,
		})
	}
}

export default DynamicMenuService
