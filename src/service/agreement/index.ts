import Service from '@/service/base'

class AgreementService extends Service {
	steps = async (language: string, stepNumber: number): Promise<string | void> => {
		return await this.Request<string>({
			baseURL: 'http://localhost:3015/',
			url: `templates/agreement/${language}/step${stepNumber}.html`,
		})
	}
}

export default AgreementService