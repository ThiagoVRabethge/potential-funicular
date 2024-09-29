import { useNavigate } from "react-router-dom"
import useUserSessionStore from "../../data/userSession"
import api from "../../services/api"
import SignUpForm from "./SignInUpForm"
import Swal from "sweetalert2"
import { useState } from "react"
import { Link } from "react-router-dom"

const SignIn = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState()

  const [password, setPassword] = useState()

  const setUserSession = useUserSessionStore(state => state.setUserSession)

  const handleSignIn = async (e) => {
    e.preventDefault()

    await api
      .post("/login", {
        "username": username,
        "password": password
      })
      .then((response) => {
        setUserSession(response.data)
        navigate('/welcome', { replace: true })
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.detail}`,
        })
      })
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ "height": "100vh" }}
    >
      <div className="container">
        <h3 className="mb-3 mt-3">Sign In</h3>

        <form onSubmit={(e) => handleSignIn(e)}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="row mb-4">
            <div className="col-6 text-end">
              <Link to="/sign-up">
                Dont have a account?
              </Link>
            </div>

            <div className="col-6 text-start">
              <Link to="/">
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="text-end">
            <button
              type="submit"
              className="btn btn-dark"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn