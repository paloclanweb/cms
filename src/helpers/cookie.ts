type CookieValues = string | number | boolean | null;

class Cookie {
	get = (name: string): string | null => {
		const value = `; ${document.cookie}`
		const parts = value.split(`; ${name}=`)
	
		if (parts.length === 2) {
			return parts.pop()?.split(';').shift() || null
		}
	
		return null
	}

	set = (name: string, value: CookieValues, seconds: number): void => {
		const date = new Date()
		const secondsToMs = seconds * 1000
		date.setTime(date.getTime() + secondsToMs)
		const expires = `expires=${date.toUTCString()}`
		document.cookie = `${name}=${value};${expires};path=/`
	}

	delete = (name: string): void => {
		document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;`
	}
}

export default Cookie
