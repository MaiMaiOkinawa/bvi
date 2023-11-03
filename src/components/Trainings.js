import { Link } from 'react-router-dom';
import CardOne from './CardOne';

export default function Trainings() {
  return (
    <>
      <section className="training-container">
        <div class="trainings">
          <div className="player-image"></div>
          <div className="card">
            <CardOne
              title="Entrena con nosotros"
              text="Descubre tu potencial de vóley
            playa con nuestros entrenamientos especializados. Nuestro equipo de
            entrenadores expertos te acompañará en un viaje de aprendizaje y
            diversión en la arena. Ya seas un principiante con ganas de aprender o
            un jugador experimentado que quiere perfeccionar sus habilidades,
            tenemos el entrenamiento perfecto para ti. Mejora tus saques, remates
            y defiendes de la mano de entrenadores titulados. No esperes
            más, únete a nosotros y empieza a brillar en la arena. Tus
            aspiraciones al vóley playa están a solo un paso de distancia.
            Inscríbete ahora y transfórmate en un jugador de vóley playa de primer
            nivel!"
            />
            <Link className="btn" to="/servicio">
              Ver nuestros entrenos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
