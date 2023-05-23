import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
  
const documentContainer = document.getElementById('root') as HTMLElement
const root = createRoot(documentContainer)

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
