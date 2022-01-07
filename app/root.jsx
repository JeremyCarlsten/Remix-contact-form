import { Links, Link, LiveReload, Outlet, Scripts } from "remix";
import stylesUrl from './styles/index.css';

export function links() {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

function NavBar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
      <li>
        <Link to="projects">Projects</Link>
      </li>
    </ul>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Links />
      </head>
      <body>
        <div className="app-container">
          <h1> Hello world Portfolio </h1>
          <NavBar />
          <Outlet />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </div>
      </body>
    </html>
  );
}
