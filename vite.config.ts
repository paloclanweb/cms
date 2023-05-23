import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src'),
		},
	},
	server: {
		port: 3015
	},
	define: {
		APP_VERSION: JSON.stringify(process.env.VITE_APP_VERSION),
		VITE_MAIN_API_URL: JSON.stringify(process.env.VITE_MAIN_API_URL),
		VITE_CLIENT_ID: JSON.stringify(process.env.VITE_CLIENT_ID),
		VITE_CLIENT_SECRET_KEY: JSON.stringify(process.env.VITE_CLIENT_SECRET_KEY),
	},
})