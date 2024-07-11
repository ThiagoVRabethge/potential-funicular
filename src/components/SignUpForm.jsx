const SignUpForm = (props) => {
  const {
    callback,
    setUsername,
    setPassword,
    buttonText
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

      <button
        type="submit"
        className="btn btn-success"
      >
        {buttonText}
      </button>
    </form>
  )
}

export default SignUpForm
