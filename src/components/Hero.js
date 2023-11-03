import { Link } from 'react-router-dom';
import '../pages/Inicio.css';

export default function Hero() {
  return (
    <>
      <div className="hero">
        <section>
          <p className="claim">
            Enseñamos <br></br>vóley playa
          </p>
          <Link className="btn" to="/servicio">
            Ver nuestros servicios
          </Link>
        </section>
      </div>
    </>
  );
}
