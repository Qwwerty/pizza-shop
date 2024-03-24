import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './page/_layouts/app'
import { AuthLayout } from './page/_layouts/auth'
import { NotFound } from './page/404'
import { Dashboard } from './page/app/dashboard/dashboard'
import { Orders } from './page/app/orders/orders'
import { SignIn } from './page/auth/sign-in'
import { SignUp } from './page/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
