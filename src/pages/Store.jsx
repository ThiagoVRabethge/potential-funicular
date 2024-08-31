import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import useAppStore from "../data/appStore"

const Store = () => {
  const navigate = useNavigate()

  const [allAppsList, setAllAppsList] = useState()

  const setSelectedApp = useAppStore(state => state.setSelectedApp)

  useEffect(() => {
    getAllApps()
  }, [])

  const getAllApps = async () => {
    await api
      .get("/apps")
      .then((response) => {
        setAllAppsList(response.data)
      })
  }

  const openAppRatings = (e, app) => {
    e.preventDefault()

    // clear state before open ratings
    setSelectedApp({})

    setSelectedApp(app)

    navigate('/ratings', { replace: true })
  }

  return (
    <>
      <div className="container">
        <div className="mt-4 mb-4">
          <h3>All apps available</h3>
        </div>

        {allAppsList && allAppsList.map((app) => (
          <div key={app.id} className="card mb-3" onClick={(e) => openAppRatings(e, app)}>
            <div className="card-body">
              <h6>{app.name}</h6>

              <p>{app.description} | <b>By {app.username}</b></p>

              <a href={app.link} target="_blank">
                {app.link}
              </a>
            </div>
          </div>
        ))}
      </div>

      <Nav />
    </>
  )
}

export default Store
