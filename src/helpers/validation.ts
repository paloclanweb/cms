import { Regex } from '@/helpers'

class Validation {
	email = (email: string): Promise<string | void> => {
		return new Promise((resolve, reject): string | void => {
			if(email.trim().length === 0) {
				reject('Email is required')
			}
	
			if(!Regex.email.test(email)) {
				reject('Email is invalid')
			}
	
			resolve()
		})
	}

	password = (password: string, rePassword?: string): Promise<string | void> => {
		return new Promise((resolve, reject): string | void => {
			if(password.trim().length === 0) {
				reject('Password is required')
			}
		
			if(password.trim().length > 32) {
				reject('Password is too long')
			}
		
			if(rePassword && password !== rePassword) {
				reject('Password is not match')
			}
	
			resolve()
		})
	}

	phone = (phone: string): Promise<string | void> => {
		return new Promise((resolve, reject): string | void => {
			if(phone.trim().length !== 10 || !Regex.phone.test(phone)) {
				reject('The phone number should be 10 digits long without a leading 0.')
			}
	
			resolve()
		})
	}

	number = (number: number): Promise<string | void> => {
		return new Promise((resolve, reject): string | void => {
			if(!Regex.number.test(number.toString())) {
				reject('Value should be a number.')
			}
	
			resolve()
		})
	}
}

export default Validation