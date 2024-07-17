import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAppStore from "../data/appStore";

const AddUpdateAppModal = (props) => {
  const { id, show, handleClose, callback } = props

  const appName = useAppStore(state => state.appName)

  const appDescription = useAppStore(state => state.appDescription)

  const appLink = useAppStore(state => state.appLink)

  const setAppName = useAppStore(state => state.setAppName)

  const setAppDescription = useAppStore(state => state.setAppDescription)

  const setAppLink = useAppStore(state => state.setAppLink)

  return (
    <Modal
      id={id}
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {
            id == "AddAppModal" && "New App"
            || id == "UpdateAppModal" && "Update App"
          }
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="mb-3">
          <input
            id="appName"
            className="form-control"
            placeholder="App name"
            defaultValue={appName || ""}
            onChange={(e) => setAppName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            id="appDescription"
            className="form-control"
            placeholder="App description"
            defaultValue={appDescription || ""}
            onChange={(e) => setAppDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            id="appLink"
            className="form-control"
            placeholder="App link"
            defaultValue={appLink || ""}
            onChange={(e) => setAppLink(e.target.value)}
          />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          Close
        </Button>

        <Button variant="dark" onClick={callback}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal >
  )
}

export default AddUpdateAppModal
