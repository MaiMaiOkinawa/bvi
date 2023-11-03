import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logoImg from '../images/logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="logo">
          <img src={logoImg} alt="logo" />
        </Link>
        <ul>
          <CustomLink to="/">Inico</CustomLink>
          <CustomLink to="/quiensomos">Quien somos</CustomLink>
          <CustomLink to="/servicio">Servicio</CustomLink>
          <CustomLink to="/tienda">Tienda</CustomLink>
          <CustomLink to="/contacte">Contacto</CustomLink>
        </ul>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  //Make sure all the path name is exactly the same
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
