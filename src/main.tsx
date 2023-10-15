import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.tsx'
import './styles/index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Pantry from './routes/Pantry.tsx'
import Expenses from './routes/Expenses.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'pantry',
    element: <Pantry />,
  },
  {
    path: 'expenses',
    element: <Expenses />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
