import 'bootstrap/dist/css/bootstrap.css'
import { BoxArrowDownLeft, HouseFill, TerminalPlus } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import useUserSessionStore from '../data/userSession'

const Nav = () => {
  const setUserSession = useUserSessionStore(state => state.setUserSession)

  const handleLogout = () => {
    setUserSession({})
  }

  return (
    <div className="fixed-bottom d-flex justify-content-center p-3">
      <div className="p-3">
        <Link to="/welcome" className="btn btn-dark">
          <HouseFill />
        </Link>
      </div>

      <div className="p-3">
        <Link to="/apps" className="btn btn-dark">
          <TerminalPlus />
        </Link>
      </div>

      <div className="p-3">
        <Link to="/" className="btn btn-dark" onClick={handleLogout}>
          <BoxArrowDownLeft />
        </Link>
      </div>
    </div>
  )
}

export default Nav
