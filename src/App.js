import Inicio from './pages/Inicio';
import Quiensomos from './pages/Quiensomos';
import Servicio from './pages/Servicio';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
        <Routes>
          <Route path="/quiensomos" element={<Quiensomos />} />
        </Routes>
        <Routes>
          <Route path="/servicio>" element={<Servicio />} />
        </Routes>
        <Routes>
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
