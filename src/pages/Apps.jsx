import { FolderPlus } from "react-bootstrap-icons"
import Nav from "../components/Nav"
import AddAppModal from "../components/AddAppModal"
import { useEffect, useState } from "react"
import api from "../services/api"
import useUserSessionStore from "../data/userSession"

const Apps = () => {
  const userSession = useUserSessionStore(state => state.userSession)

  const [appsList, setAppsList] = useState()

  useEffect(() => {
    api
      .get(`/users/${userSession.id}/apps`)
      .then((response) => {
        console.log(response)
        setAppsList(response.data)
      })
  }, [])

  return (
    <>
      <div className="container">
        {/* <div className="text-end mt-4">
          <button
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#AddAppModal"
          >
            <FolderPlus />
          </button>
        </div> */}

        <div className="row mt-4 mb-4">
          <div className="col-6">
            <h3>Your Apps</h3>
          </div>

          <div className="col-6 text-end">
            <button
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#AddAppModal"
            >
              <FolderPlus />
            </button>
          </div>
        </div>

        {appsList && appsList.map((app) => (
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

      <AddAppModal
        id={"AddAppModal"}
      />
    </>
  )
}

export default Apps
