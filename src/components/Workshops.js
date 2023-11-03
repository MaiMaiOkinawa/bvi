import { Link } from 'react-router-dom';
import CardOne from './CardOne';

export default function Workshops() {
  return (
    <>
      <section className="workshop-container">
        <div class="workshops">
          <div className="card">
            <CardOne
              title="Nuestros workshops"
              text="Descubre nuestros workshops destinados a entrenadores y jugadores que quieran ampliar sus conocimientos. Aprende técnicas clave, tácticas avanzadas, ejercicios de entrenamiento, planificación, mejora del juego en equipo, etc. en nuestros eventos en vivo u online. Contamos con los mejores profesionales que te acompañarán en un día lleno de diversión y aprendizaje. Únete a nosotros y lleva tus habilidades al siguiente nivel a la pista de vóley playa. No pierdas la oportunidad de formar parte de estas jornadas exclusivas!"
            />
            <Link className="btn" to="/servicio">
              Ver próximos workshops
            </Link>
          </div>
          <div className="player-image"></div>
        </div>
      </section>
    </>
  );
}
