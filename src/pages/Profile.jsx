import axios from "axios"
import { useState } from "react"
import Nav from "../components/Nav"
import useUserSessionStore from "../data/userSession"

const Profile = () => {
  const userSession = useUserSessionStore(state => state.userSession)

  const setUserSession = useUserSessionStore(state => state.setUserSession)

  const [showForm, setShowForm] = useState(false)

  const [file, setFile] = useState()

  const [aboutMe, setAboutMe] = useState()

  let userHasIcon = userSession.icon != null

  let userHasntIcon = userSession.icon == null

  let icon = (
    userHasIcon && userSession.icon ||
    userHasntIcon && "/pixlr-image-generator-597b0c43-5a96-41d4-b84e-ed8cd146224e-removebg-preview.png"
  )

  const handleSubmitForm = () => {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}users/${userSession.id}/profile/${aboutMe}`,
        {
          "file": file
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((response) => {
        setUserSession(response.data)
        setShowForm(false)
      })
  }

  console.log(icon)

  return (
    <>
      <div className="container">
        <div className="text-center mt-4 mb-4">
          <img
            src={icon}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%"
            }}
          />

          {
            showForm && (
              <input
                type="file"
                className="form-control mt-4"
                onChange={(e) => {
                  setFile(e.target.files[0])
                }}
              />
            )
          }
        </div>

        <div className="text-center mb-4">
          <h4>
            <b>
              {userSession.username}
            </b>
          </h4>
        </div>

        <textarea
          placeholder="Awesome about me"
          className="form-control mb-4"
          defaultValue={userSession.about_me}
          onChange={(e) => {
            setShowForm(true)
            setAboutMe(e.target.value)
          }}
        />

        {
          showForm && (
            <button
              className="btn btn-dark"
              onClick={handleSubmitForm}
            >
              Update
            </button>
          )
        }
      </div>

      <Nav />
    </>
  )
}

export default Profile
