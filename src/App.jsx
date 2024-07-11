import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
import api from "./services/api"
import Swal from "sweetalert2"
import SignUpForm from './components/SignUpForm';

function App() {
  const [username, setUsername] = useState()

  const [password, setPassword] = useState()

  const handleSignIn = async (e) => {
    e.preventDefault()

    await api
      .post("/login", {
        "username": username,
        "password": password
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.detail}`,
        })
      })
  }

  const handleSignUp = async (e) => {
    e.preventDefault()

    await api
      .post("/users", {
        "username": username,
        "password": password
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "You did it!",
          text: `Welcome ${response.data.username}`,
          footer: 'Sign in for getting started'
        })
      })
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
      </div>
    </>
  )
}

export default App
