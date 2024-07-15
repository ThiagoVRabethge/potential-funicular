import { useEffect, useState } from "react"
import { FolderPlus, Pencil, Trash } from "react-bootstrap-icons"
import AddAppModal from "../components/AddAppModal"
import Nav from "../components/Nav"
import useUserSessionStore from "../data/userSession"
import api from "../services/api"

const Apps = () => {
  const userSession = useUserSessionStore(state => state.userSession)

  const [appsList, setAppsList] = useState()

  const [selectedApp, setSelectedApp] = useState()

  useEffect(() => {
    getUserApps()
  }, [])

  const getUserApps = async () => {
    await api
      .get(`/users/${userSession.id}/apps`)
      .then((response) => {
        setAppsList(response.data)
      })
  }

  const deleteApp = async (appId) => {
    await api
      .delete(`/apps/${appId}`)
      .then(() => {
        getUserApps()
      })
  }

  return (
    <>
      <div className="container">
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
              <div className="row">
                <div className="col-10">
                  <h6>{app.name}</h6>

                  <p>{app.description}</p>

                  <a href={app.link} target="_blank">
                    {app.link}
                  </a>
                </div>

                <div className="col-2 text-end">
                  <button
                    className="btn btn-dark mb-1 me-1"
                    onClick={() => deleteApp(app.id)}
                  >
                    <Trash />
                  </button>

                  <button
                    className="btn btn-dark mb-1 me-1"
                    onClick={() => setSelectedApp(app)}
                    data-bs-toggle="modal"
                    data-bs-target="#UpdateAppModal"
                  >
                    <Pencil />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Nav />

      <AddAppModal
        id={"AddAppModal"}
        reloadAppList={getUserApps}
      />

      <AddAppModal
        id={"UpdateAppModal"}
        reloadAppList={getUserApps}
        selectedApp={selectedApp}
      />
    </>
  )
}

export default Apps
