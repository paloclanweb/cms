const Regex = {
	email: new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
	phone: new RegExp(/^[1-9]\d{9}$/),
	number: new RegExp(/^[0-9]+$/)
}

export default Regex