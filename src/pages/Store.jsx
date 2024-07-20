import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import api from "../services/api"

const Store = () => {
  const [allAppsList, setAllAppsList] = useState()

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

  return (
    <>
      <div className="container">
        <div className="mt-4 mb-4">
          <h3>All apps available</h3>
        </div>

        {allAppsList && allAppsList.map((app) => (
          <div key={app.id} className="card mb-3">
            <div className="card-body">
              <h6>{app.name}</h6>

              <p>{app.description}</p>

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
