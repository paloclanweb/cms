import Service from '@/service/base'
import type { CompanionShipModel, CompanionsModel, DriverModel, TransporterOwnerModel } from './model'
import type { CompanionshipDTO } from './dto'
import type { CompanionList } from '@/types'
import { Parser } from '@/helpers'

class CompanionshipService extends Service {
	list = async (): Promise<void | Array<CompanionShipModel>> => {
		return await this.Request<Array<CompanionShipModel>>({
			url: 'admin/friendship/co-list',
			onlyAuth: true
		})
	}

	getCompanionsById = async (Id: string): Promise<CompanionsModel | void> => {
		return this.Request<CompanionsModel>({
			url: `admin/friendship/list/${Id}`,
			onlyAuth: true
		})
	}

	getTransporterOwners = async (): Promise<Array<TransporterOwnerModel> | void> => {
		return await this.Request<Array<TransporterOwnerModel>>({
			url: 'admin/friendship/to-list',
			onlyAuth: true,
		})
	}

	getDrivers = async (): Promise<Array<DriverModel> | void> => {
		return await this.Request<Array<DriverModel>>({
			url: 'admin/friendship/driver-list',
			onlyAuth: true,
		})
	}

	setCompanionsById = async (Id: string, Companions: Array<CompanionshipDTO>): Promise<boolean | void> => {
		return await this.Request<boolean>({
			url: `admin/friendship/${Id}`,
			method: 'POST',
			onlyAuth: true,
			data: Companions
		})
	}

	getCompanions = async (Id: string): Promise<CompanionList> => {
		const Parse = new Parser()
		const [companions, transpoterOwners, drivers] = await Promise.all([
			this.getCompanionsById(Id), 
			this.getTransporterOwners(),
			this.getDrivers(),
		])

		if(!drivers || !transpoterOwners) {
			return {
				Drivers: [],
				TransporterOwners: []
			}
		}

		const assignedDrivers = (companions?.Drivers || []).map(driver => driver.Id)
		const assignedTO = (companions?.TO || []).map(to => to.Id)

		return {
			Drivers: [...drivers.map(driver => Parse.driver(driver, false, assignedDrivers.includes(driver.Id)))],
			TransporterOwners: [...transpoterOwners.map(to => Parse.transporterOwner(to, false, assignedTO.includes(to.Id)))]
		}
	}
}

export default CompanionshipService