import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logoImg from './logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logoImg} alt="logo" />
      </Link>
      <ul>
        <CustomLink to="/">Inici</CustomLink>

        <CustomLink to="/club">Club</CustomLink>

        <CustomLink to="/entrenaments">Entrenaments</CustomLink>

        <CustomLink to="/tecnificacio">Tecnificació</CustomLink>

        <CustomLink to="/workshops">Workshops</CustomLink>

        <CustomLink to="/inscripcio">Inscripció</CustomLink>

        <CustomLink to="/contacte">Contacte</CustomLink>
      </ul>
    </nav>
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
