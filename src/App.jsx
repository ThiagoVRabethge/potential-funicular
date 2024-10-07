import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import api from "./services/api"

function App() {
  useEffect(() => {
    api
      .get("/")
      .then((response) => {
        console.log(response, "render server active")
      })
      .catch((error) => console.error(error))
  })

  return (
    <>
      <div className="container">
        <div className="text-end mt-3">
          <Link to="/sign-in" className="btn btn-dark">
            Sign-Up/Sign-In
          </Link>
        </div>

        <div className="text-center mt-5">
          <div className="row">
            <div className="col-12">
              <h4>
                <b>
                  Community Store
                </b>
              </h4>

              <span>
                <i>
                  The house of the free software
                </i>
              </span>

              <p className="mt-3" style={{ "textAlign": "justify" }}>
                The Community Store is part of the Antarctic ecosystem, aimed at creating a free, open, and community-driven virtual environment. Its goal is to publish Antarctic ecosystem apps, promoting accessibility and user experience. We seek to spread the ideal of "from each according to their ability, to each according to their need," initiating social transformation through the internet.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <Link to="/public-store" className="btn btn-dark">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div style={{
          "position": "fixed",
          "bottom": "0",
          "left": "0",
          "width": "100%",
          "textAlign": "center",
          "marginBottom": "30px"
        }}>
          <span>
            No Copyrights. We don't believe it.
          </span>
        </div>
      </div>
    </>
  )
}

export default App
