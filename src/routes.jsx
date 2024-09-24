import { createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import Apps from './pages/Apps.jsx'
import Profile from './pages/Profile.jsx'
import SignIn from "./pages/signIn/SignIn.jsx"
import SignUp from './pages/signUp/SignUp.jsx'
import AppRating from './pages/store/AppRating.jsx'
import PublicStore from './pages/store/PublicStore.jsx'
import Store from './pages/store/Store.jsx'
import Welcome from "./pages/Welcome.jsx"

const Routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/public-store", element: <PublicStore /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/store", element: <Store /> },
  { path: "/apps", element: <Apps /> },
  { path: "/ratings", element: <AppRating /> },
  { path: "/profile", element: <Profile /> },
])

export default Routes