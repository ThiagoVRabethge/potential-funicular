import { useEffect, useState } from "react"
import { FolderPlus, Pencil, Trash } from "react-bootstrap-icons"
import Button from 'react-bootstrap/Button'
import AddUpdateAppModal from "../components/AddUpdateAppModal"
import Nav from "../components/Nav"
import useAppStore from "../data/appStore"
import useUserSessionStore from "../data/userSession"
import api from "../services/api"

const Apps = () => {
  const userSession = useUserSessionStore(state => state.userSession)

  const [appsList, setAppsList] = useState()

  const [selectedApp, setSelectedApp] = useState()

  const appName = useAppStore(state => state.appName)

  const appDescription = useAppStore(state => state.appDescription)

  const appLink = useAppStore(state => state.appLink)

  const setAppName = useAppStore(state => state.setAppName)

  const setAppDescription = useAppStore(state => state.setAppDescription)

  const setAppLink = useAppStore(state => state.setAppLink)

  const resetState = useAppStore(state => state.resetState)

  const [showAddAppModal, setShowAddAppModal] = useState(false)

  const handleCloseAddAppModal = () => {
    setShowAddAppModal(false)
    resetState()
  }

  const handleOpenAddAppModal = () => {
    setShowAddAppModal(true)
    resetState()
  }

  const [showUpdateAppModal, setShowUpdateAppModal] = useState(false)

  const handleCloseUpdateAppModal = () => {
    setShowUpdateAppModal(false)
    resetState()
  }

  const handleOpenUpdateAppModal = () => {
    setShowUpdateAppModal(true)
    resetState()
  }

  useEffect(() => {
    getUserApps()
  }, [])

  const handleLoadAppDataModal = (app) => {
    resetState()
    setSelectedApp(app)
    setAppName(app.name)
    setAppDescription(app.description)
    setAppLink(app.link)
  }

  const getUserApps = () => {
    api
      .get(`/users/${userSession.id}/apps`)
      .then((response) => {
        setAppsList(response.data)
      })
  }

  const handleAddApp = (e) => {
    e.preventDefault()

    api
      .post("/apps", {
        "name": appName,
        "description": appDescription,
        "link": appLink,
        "user_id": userSession.id
      })
      .then(() => {
        getUserApps()
        handleCloseAddAppModal()
      })
  }

  const handleUpdateApp = (e) => {
    e.preventDefault()

    api
      .put(`/apps/${selectedApp.id}`, {
        "name": appName,
        "description": appDescription,
        "link": appLink,
        "user_id": userSession.id
      })
      .then(() => {
        getUserApps()
        handleCloseUpdateAppModal()
      })
  }

  const deleteApp = (appId) => {
    api
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
            <Button
              variant="dark"
              onClick={() => handleOpenAddAppModal()}
            >
              <FolderPlus />
            </Button>
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

                  <Button
                    variant="dark"
                    className="mb-1 me-1"
                    onClick={() => {
                      handleOpenUpdateAppModal()
                      handleLoadAppDataModal(app)
                    }}
                  >
                    <Pencil />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddUpdateAppModal
        id={"AddAppModal"}
        show={showAddAppModal}
        handleClose={handleCloseAddAppModal}
        callback={handleAddApp}
      />

      <AddUpdateAppModal
        id={"UpdateAppModal"}
        show={showUpdateAppModal}
        handleClose={handleCloseUpdateAppModal}
        callback={handleUpdateApp}
      />

      <Nav />
    </>
  )
}

export default Apps
