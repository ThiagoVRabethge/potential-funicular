import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Welcome from "./pages/Welcome.jsx"
import Apps from './pages/Apps.jsx'
import Store from './pages/Store.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/store", element: <Store /> },
  { path: "/apps", element: <Apps /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
