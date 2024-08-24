import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import useAppStore from "../data/appStore"
import useUserSessionStore from "../data/userSession"
import api from "../services/api"

const AppRating = () => {
  const userSession = useUserSessionStore(state => state.userSession)

  const app = useAppStore(state => state.selectedApp)

  const [appRating, setAppRating] = useState()

  const [appRatingsList, setAppRatingsList] = useState()

  useEffect(() => {
    getAppRatings()
  }, [])

  const getAppRatings = () => {
    api
      .get(`/apps_ratings/${app.id}`)
      .then((response) => {
        setAppRatingsList(response.data)
      })
      .catch((error) => console.error(error))
  }

  const handleSubmitRating = (e) => {
    e.preventDefault()

    setAppRating("")

    api
      .post("apps_ratings", {
        "user_id": userSession.id,
        "app_id": app.id,
        "comment": appRating
      })
      .then(() => {
        getAppRatings()
      })
      .catch((error) => console.error(error))
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
            required
          />

          <div className="text-end">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>

        <h4 className="mt-4 mb-3">
          Comments
        </h4>

        {
          appRatingsList && appRatingsList.map((rating) => (
            <>
              <div className="mb-3" key={rating.id}>
                <b>
                  {rating.username}
                </b>

                <div className="card">
                  <div className="card-body">
                    {rating.comment}
                  </div>
                </div>
              </div>
            </>
          ))
        }
      </div>

      <Nav />
    </>
  )
}

export default AppRating
