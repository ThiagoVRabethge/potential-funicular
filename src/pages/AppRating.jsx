import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import useAppStore from "../data/appStore"
import api from "../services/api"
import useUserSessionStore from "../data/userSession"

const AppRating = () => {
  const userSession = useUserSessionStore(state => state.userSession)

  const app = useAppStore(state => state.selectedApp)

  const [appRating, setAppRating] = useState()

  console.log(appRating)

  // useEffect(() => {}, [])

  const handleSubmitRating = (e) => {
    e.preventDefault()

    setAppRating("")

    api
      .post("apps_ratings", {
        "user_id": userSession.id,
        "app_id": app.id,
        "comment": appRating
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <div className="container">
        <h2 className="mt-4">
          {app.name}
        </h2>

        <p>{app.description}</p>

        <form onSubmit={(e) => handleSubmitRating(e)}>
          <textarea
            className="form-control mb-3"
            placeholder="What awesome app"
            onChange={(e) => setAppRating(e.target.value)}
          />

          <div className="text-end">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>

      <Nav />
    </>
  )
}

export default AppRating
