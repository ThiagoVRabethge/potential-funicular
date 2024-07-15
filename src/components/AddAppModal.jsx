import { useState } from "react"
import api from "../services/api"
import useUserSessionStore from "../data/userSession"

const AddAppModal = (props) => {
  const { id, reloadAppList, selectedApp } = props

  const [appName, setAppName] = useState()

  const [appDescription, setAppDescription] = useState()

  const [appLink, setAppLink] = useState()

  const userSession = useUserSessionStore(state => state.userSession)

  const handleAddApp = async (e) => {
    e.preventDefault()

    await api
      .post("/apps", {
        "name": appName,
        "description": appDescription,
        "link": appLink,
        "user_id": userSession.id
      })
      .then(() => {
        reloadAppList()
      })
      .catch((error) => console.error(error))
  }

  const handleUpdateApp = async (e) => {
    e.preventDefault()

    await api
      .put(`/apps/${selectedApp.id}`, {
        "name": appName,
        "description": appDescription,
        "link": appLink,
        "user_id": userSession.id
      })
      .then(() => {
        reloadAppList()
      })
  }

  return (
    <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {
                id == "AddAppModal" && "New App" ||
                id == "UpdateAppModal" && "Update App"    
              }
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <form onSubmit={(e) => {
            id == "AddAppModal" && handleAddApp(e) ||
            id == "UpdateAppModal" && handleUpdateApp(e)
          }}>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="App name"
                  onChange={(e) => setAppName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="App description"
                  onChange={(e) => setAppDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="App link"
                  onChange={(e) => setAppLink(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-dark" data-bs-dismiss="modal">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAppModal
