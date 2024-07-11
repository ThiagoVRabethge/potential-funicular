import 'bootstrap/dist/css/bootstrap.css'
import useUserSessionStore from '../data/userSession'
import Nav from '../components/Nav'

const Welcome = () => {
  const userSession = useUserSessionStore(state => state.userSession)

  let code = `{
    "name": "My Progressive Web App",
    "short_name": "My PWA",
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#2196f3",
    "icons": [
      {
        "src": "/images/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/images/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }`

  return (
    <>
      <div className="container">
        <div className="text-center mt-4">
          <h2>Getting started</h2>
        </div>

        <p>
          Welcome dear {userSession.username}, we are happy to see you here, follow the steps above
        </p>

        <ol>
          <li>
            Add a manifest json in your project root:
            <dl>
              <dt>
                <code>
                  {code}
                </code>
              </dt>
            </dl>
          </li>

          <li>
            Add manifest link in your index.html:
            <dl>
              <dt>
                <code>
                  {`<link rel="manifest" href="/manifest.json" />`}
                </code>
              </dt>
            </dl>
          </li>

          <li>
            Build and deploy!
            <dl>
              <dt>
                <p
                  style={{ "fontWeight": "normal" }}
                >
                  Now, you only need build your application and deploy it
                </p>
              </dt>
            </dl>
          </li>
        </ol>
      </div>

      <Nav />
    </>
  )
}

export default Welcome
