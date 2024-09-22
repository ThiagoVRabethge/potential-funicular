import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import SignUpForm from './pages/signIn/SignInUpForm'
import useUserSessionStore from './data/userSession'
import api from "./services/api"

function App() {
  // const navigate = useNavigate()

  // const [username, setUsername] = useState()

  // const [password, setPassword] = useState()

  // const setUserSession = useUserSessionStore(state => state.setUserSession)

  // const handleSignIn = async (e) => {
  //   e.preventDefault()

  //   await api
  //     .post("/sign_in", {
  //       "username": username,
  //       "password": password
  //     })
  //     .then((response) => {
  //       setUserSession(response.data)
  //       navigate('/welcome', { replace: true })
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: `${error.response.data.detail}`,
  //       })
  //     })
  // }

  // const handleSignUp = async (e) => {
  //   e.preventDefault()

  //   await api
  //     .post("/sign_up", {
  //       "username": username,
  //       "password": password
  //     })
  //     .then((response) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "You did it!",
  //         text: `Welcome ${response.data.username}`,
  //         footer: 'Sign in for getting started'
  //       })
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: `${error.response.data.detail}`,
  //         footer: 'Remember: password must contain uppercase letter, lowercase letter, special character, a number and at least 8 characters'
  //       })
  //     })
  // }

  return (
    <>
      <div className="container">
        <div className="text-end mt-3">
          <Link to="/sign-in" className="btn btn-dark">
            Sign-Up/Sign-In
          </Link>
        </div>

        <div className="text-center mt-5">
          <div className="row">
            <div className="col-12">
              <h4>
                <b>
                  Community Store
                </b>
              </h4>

              <span>
                <i>
                  The house of the free software
                </i>
              </span>

              <p className="mt-3" style={{ "textAlign": "justify" }}>
                The Community Store is part of the Antarctic ecosystem, aimed at creating a free, open, and community-driven virtual environment. Its goal is to publish Antarctic ecosystem apps, promoting accessibility and user experience. We seek to spread the ideal of "from each according to their ability, to each according to their need," initiating social transformation through the internet.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <Link to="/" className="btn btn-dark">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div style={{
          "position": "fixed",
          "bottom": "0",
          "left": "0",
          "width": "100%",
          "textAlign": "center",
          "marginBottom": "30px"
        }}>
          <span>
            No Copyrights. We don't believe it.
          </span>
        </div>
      </div>

      {/* <div className="container">
        <h3 className="text-center mb-5 mt-5">
          Sign In
        </h3>

        <SignUpForm
          callback={handleSignIn}
          setUsername={setUsername}
          setPassword={setPassword}
          buttonText={"Login"}
        />

        <h3 className="text-center mb-5 mt-5">
          Sign Up
        </h3>

        <SignUpForm
          callback={handleSignUp}
          setUsername={setUsername}
          setPassword={setPassword}
          buttonText={"Register"}
        />
      </div> */}
    </>
  )
}

export default App
