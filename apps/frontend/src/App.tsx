import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import PurchaseFrequencyPage from './pages/PurchaseFrequency'
import CustomerListPage from './pages/CustomerList'
import CustomerDetailPage from './pages/CustomerDetail'
import { PATH } from './constants/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  const router = createBrowserRouter([
    {
      element: (
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      ),
      children: [
        {
          path: PATH.INDEX,
          element: <IndexPage />,
        },
        {
          path: PATH.PURCHASE_FREQUENCY,
          element: <PurchaseFrequencyPage />,
        },
        {
          path: PATH.CUSTOMER_LIST,
          element: <CustomerListPage />,
        },
        {
          path: PATH.CUSTOMER_DETAIL,
          element: <CustomerDetailPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
