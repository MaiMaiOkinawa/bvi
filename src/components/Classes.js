import { Link } from 'react-router-dom';
import CardOne from './CardOne';

export default function Classes() {
  return (
    <>
      <section className="class-container">
        <div class="classes-wrapper wrapper-left">
          <div className="card left">
            <CardOne
              title="Entrenamientos personales"
              text="Aprovecha al máximo tus clases personales de vóley playa! Con la atención personalizada de nuestros instructores expertos, mejorarás rápidamente tus habilidades. Realizamos entrenamientos desde 1 hasta 4 jugadores, para todos los niveles: iniciación, intermedio, avanzado y pro. No pierdas la oportunidad de prepararte de una forma profesional en el vóley playa. Transfórmate en un jugador de vóley playa de primera clase con nuestras clases personales. No esperes más, empieza tu transformación hoy mismo!"
            />
            <Link className="btn" to="/tienda">
              Ver entrenos personales
            </Link>
          </div>
        </div>

        <div class="classes-wrapper wrapper-right">
          <div className="card right">
            <CardOne
              title="Formación a entrenadores"
              text="Impartimos conocimientos y habilidades de vanguardia a aquellos que deseen convertirse en entrenadores de élite. Realizamos formaciones 
          a clubes de vóley playa y a entrenadores que lo deseen. Nuestros eventos de formación tanto online como presenciales, abarcan todos los aspectos esenciales del vóley playa, desde la técnica, la táctica hasta la preparación física, planificación o la psicología deportiva. Si aspiras a convertirte en un entrenador de vóley playa de alto nivel 
          o mejorar tus habilidades actuales, Beach Volleyball Institute 
          es la elección ideal. "
            />
            <Link className="btn" to="/servicio">
              Ver nuestras formaciones
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
