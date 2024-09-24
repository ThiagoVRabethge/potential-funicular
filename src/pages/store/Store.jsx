import { useEffect, useState } from "react"
import { BoxArrowInUpRight } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import Nav from "../../components/Nav"
import useAppStore from "../../data/appStore"
import api from "../../services/api"

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

    setSelectedApp({})

    setSelectedApp(app)

    navigate('/ratings', { replace: true })
  }

  return (
    <>
      <div className="container">
        <div className="mt-4 mb-4">
          <h3>Store</h3>
        </div>

        {allAppsList && allAppsList.map((app) => (
          <div className="card mb-3" key={app.id} onClick={(e) => openAppRatings(e, app)}>
            <div className="card-body">
              <div className="row">
                <div className="col-10">
                  <b>
                    {app.name}
                  </b>
                </div>

                <div className="col-2">
                  <BoxArrowInUpRight />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <Nav />
    </>
  )
}

export default Store
