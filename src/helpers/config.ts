const config = {
	appVersion: import.meta.env.VITE_APP_VERSION,
	clientId: import.meta.env.VITE_CLIENT_ID || '',
	clientSecret: import.meta.env.VITE_CLIENT_SECRET_KEY || '',
	isDevelopment: import.meta.env.VITE_NODE_ENV === 'development',
	isTest: import.meta.env.VITE_NODE_ENV === 'test',
	isProduction: import.meta.env.VITE_NODE_ENV === 'master',
	isUat: import.meta.env.VITE_NODE_ENV === 'uat',
	googleApi: import.meta.env.VITE_GOOGLE_API || '',

	authApiUrl: import.meta.env.VITE_AUTH_API_URL || '',
	mainApiUrl: import.meta.env.VITE_MAIN_API_URL || '',
	siteTitle: import.meta.env.VITE_SITE_TITLE || '',

	authApiLocalhostUrl: import.meta.env.VITE_AUTH_API_LOCALHOST_URL,
	mainApiLocalhostUrl: import.meta.env.VITE_MAIN_API_LOCALHOST_URL,
	useLocalhostEndpoints: import.meta.env.VITE_USE_LOCAL_API === '1',

	socketEndpoint: import.meta.env.VITE_SOCKET_URL || '',
	socketUsername: import.meta.env.VITE_SOCKET_UID || '',
	socketPassword: import.meta.env.VITE_SOCKET_PWD || '',

	isConsoleLogging: import.meta.env.VITE_CONSOLE_LOG === 'ON',
	// JSON_Server_URL: 'http://9814c6a1d9d7.ngrok.io',
	JSON_Server_URL: 'http://localhost:3500',

	tracePermission: import.meta.env.VITE_TRACE_PERMISSIONS === 'ON',
}

export default config
