import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
import api from "./services/api"
import Swal from "sweetalert2"

function App() {
  const [username, setUsername] = useState()

  const [password, setPassword] = useState()

  const handleLogin = async (e) => {
    e.preventDefault()

    await api
      .post("/users", {
        "username": username,
        "password": password
      })
      .then((response) => console.log(response))
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
      <div className="container">
        <h3 className="text-center mb-5 mt-5">
          Don't have a account?
        </h3>

        <form onSubmit={(e) => handleLogin(e)}>
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

          <button
            type="submit"
            className="btn btn-success"
          >
            Register
          </button>
        </form>

        <h3 className="text-center mb-5 mt-5">
          Or login
        </h3>
      </div>
    </>
  )
}

export default App
