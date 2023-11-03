import { Link } from 'react-router-dom';
import logo2 from '../images/logo2.svg';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <nav class="footer-nav">
          <div className="footer-logo">
            <Link to="/" className="logo-footer">
              <img src={logo2} alt="logo" />
            </Link>
          </div>
          <div className="box">
            <li>+34 6555 555 555</li>
            <li>info@beachvolleyballinstitute.com</li>
          </div>
          <div className="box">
            <ul className="footer-links">
              <Link to="/quiensomos">Quien somos</Link>
              <Link to="/servicio">Servicio</Link>
              <Link to="/tienda">Tienda</Link>
              <Link to="/contacte">Contacto</Link>
            </ul>
          </div>
          <div className="box">
            <li>Síguenos</li>
            <Link to="#">
              <i className="fa-brands fa-instagram" />
            </Link>
            <Link to="#">
              <i className="fa-brands fa-tiktok" />
            </Link>
          </div>
        </nav>
      </footer>
      <section className="bottom">
        <div className="rights">
          <li>© 2023 Beach Volleyball institute</li>
          <li>Desarrollado por Maï Uchida Kishaba</li>
        </div>
      </section>
    </>
  );
}
