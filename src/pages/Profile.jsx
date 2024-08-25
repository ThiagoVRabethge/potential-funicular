import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import useUserSessionStore from "../data/userSession"
import api from "../services/api"

const Profile = () => {
  const userSession = useUserSessionStore(state => state.userSession)

  const [userData, setUserData] = useState()

  const [showButton, setShowButton] = useState(false)

  const [aboutMe, setAboutMe] = useState()

  const [icon, setIcon] = useState()

  useEffect(() => {
    getUserProfile()
  }, [])

  const getUserProfile = () => {
    api
      .get(`/users/${userSession.id}/profile`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error))
  }

  const putUserProfile = () => {
    api
      .put("/users", {
        "user_id": userSession.id,
        "about_me": aboutMe,
        "icon": ""
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  return (
    <div className="container">
      <div className="m-4 text-center">
        <img
          src={
            // userData && userData.icon ||
            "../../public/pixlr-image-generator-597b0c43-5a96-41d4-b84e-ed8cd146224e-removebg-preview.png"
          }
          alt="profile icon"
          style={{
            "maxWidth": "100px"
          }}
        />

        {/* {
          showButton && (
            <>
              <br />

              <input
                type="file"
                className="form-control m-3"
                onChange={(e) => setIcon(e.target.value)}
              />
            </>
          )
        } */}
      </div>

      <div className="m-4 text-center">
        <h4>
          {userData && userData.username}
        </h4>
      </div>

      <textarea
        className="form-control m-4"
        onChange={(e) => {
          setShowButton(true)
          setAboutMe(e.target.value)
        }}
        defaultValue={userData && userData.about_me}
        placeholder="What great profile"
      />

      {
        showButton && (
          <>
            <button
              className="btn btn-dark ms-4 text-end"
              onClick={() => putUserProfile()}
            >
              Update
            </button>
          </>
        )
      }

      <Nav />
    </div>
  )
}

export default Profile
