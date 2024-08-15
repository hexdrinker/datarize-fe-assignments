import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootPage from './pages/RootPage'
import PurchaseFrequencyPage from './pages/PurchaseFrequency'
import CustomerListPage from './pages/CustomerList'
import CustomerDetailPage from './pages/CustomerDetail'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      children: [
        {
          path: '/purchase-frequency',
          element: <PurchaseFrequencyPage />,
        },
        {
          path: '/customers',
          element: <CustomerListPage />,
        },
        {
          path: '/customers/:id',
          element: <CustomerDetailPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
