import Hero from '../components/Hero';
import './Inicio.css';
import Services from '../components/Services';
import Trainings from '../components/Trainings';
import Classes from '../components/Classes';
import Workshops from '../components/Workshops';
import Footer from '../components/Footer';

export default function Inicio() {
  return (
    <>
      <Hero />
      <Services />
      <Trainings />
      <Classes />
      <Workshops />
      <Footer />
    </>
  );
}
