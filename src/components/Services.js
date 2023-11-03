import { Link } from 'react-router-dom';
import CardOne from './CardOne';

export default function Services() {
  return (
    <>
      <section className="service-container">
        <div class="services">
          <div className="card">
            <CardOne
              title="Fórmate con nosotros"
              subTitle="Aportamos conocimiento en todas las etapas formativas del vóley playa. "
              text="Trabajamos conjuntamente tanto con jugadores que quieran mejorar sus resultados, como a entrenadores que quieren ampliar sus conocimientos, sea cual sea su nivel.
          Ofrecemos sesiones de formación a clubes para mejorar el nivel tanto de sus entrenadores como de sus jugadores. Además, realizamos sesiones abiertas presenciales y online para todos aquellos que quieran ampliar sus conocimientos.
          Y si lo que deseas es entrenar con nosotros en alguno de nuestros grupos de entrenamiento o de forma personal, no dudes en contactarnos."
            />
            <Link className="btn" to="/quiensomos">
              Ver quien somos
            </Link>
          </div>
          <div className="court-image"></div>
        </div>
      </section>
    </>
  );
}
