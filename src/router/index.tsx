import { type FC, type ReactElement } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes)
const Router: FC = (): ReactElement => {
	return (
		<>
			<Outlet />
			<RouterProvider router={router} />
		</>
	)
}

export default Router