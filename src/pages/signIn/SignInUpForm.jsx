import { Link } from "react-router-dom"

const SignInUpForm = (props) => {
  const {
    callback,
    setUsername,
    setPassword,
    buttonText,
    redirectRoute,
    redirectMessage
  } = props

  return (
    <form onSubmit={(e) => callback(e)}>
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

      <div className="m-3">
        <Link to="/">
          {redirectMessage}
        </Link>
      </div>

      <div className="text-end">
        <button
          type="submit"
          className="btn btn-dark"
        >
          {buttonText}
        </button>
      </div>
    </form>
  )
}

export default SignInUpForm
