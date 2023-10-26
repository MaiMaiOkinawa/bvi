import Inici from './pages/Inici';
import Club from './pages/Club';
import Entrenaments from './pages/Entrenaments';
import Tecnificacio from './pages/Tecnificatio';
import Workshops from './pages/Workshops';
import Inscripcio from './pages/Inscripcio';
import Contacte from './pages/Contacte';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inici />} />
        </Routes>
        <Routes>
          <Route path="/club" element={<Club />} />
        </Routes>
        <Routes>
          <Route path="/entrenaments>" element={<Entrenaments />} />
        </Routes>
        <Routes>
          <Route path="/tecnificacio" element={<Tecnificacio />} />
        </Routes>
        <Routes>
          <Route path="/workshops" element={<Workshops />} />
        </Routes>
        <Routes>
          <Route path="/inscripcio" element={<Inscripcio />} />
        </Routes>
        <Routes>
          <Route path="/contacte" element={<Contacte />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
