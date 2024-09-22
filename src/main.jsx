import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import AppRating from './pages/AppRating.jsx'
import Apps from './pages/Apps.jsx'
import Profile from './pages/Profile.jsx'
import SignIn from "./pages/signIn/SignIn.jsx"
import SignUp from './pages/signUp/SignUp.jsx'
import Store from './pages/Store.jsx'
import Welcome from "./pages/Welcome.jsx"

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/store", element: <Store /> },
  { path: "/apps", element: <Apps /> },
  { path: "/ratings", element: <AppRating /> },
  { path: "/profile", element: <Profile /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
