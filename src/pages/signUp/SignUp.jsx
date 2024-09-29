import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import api from "../../services/api"

const SignUp = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState()

  const [password, setPassword] = useState()

  const handleSignUp = async (e) => {
    e.preventDefault()

    await api
      .post("/register", {
        "username": username,
        "password": password
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "You did it!",
          text: `Welcome ${response.data.username}`,
          footer: 'Sign in for getting started',
        })
      })
      .then(() => navigate('/sign-in', { replace: true }))
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.detail}`,
          footer: 'Remember: password must contain uppercase letter, lowercase letter, special character, a number and at least 8 characters'
        })
      })
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ "height": "100vh" }}
      >
        <div className="container">
          <h3 className="mb-3 mt-3">Sign Up</h3>

          <form onSubmit={(e) => handleSignUp(e)}>
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

            <div className="col-6">
              <Link to="/sign-in">
                Back to sign in
              </Link>
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
    </>
  )
}

export default SignUp