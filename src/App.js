import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Nosotros from './pages/Nosotros';
import Calidad from './pages/Calidad';
import SeguridadSalud from './pages/SeguridadSalud';
import MedioAmbiente from './pages/MedioAmbiente';
import Homologaciones from './pages/Homologaciones';
import Consultoria from './pages/Consultoria';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/calidad" element={<Calidad/>} />
        <Route path="/seguridad-y-salud" element={<SeguridadSalud/>} />
        <Route path="/medio-ambiente" element={<MedioAmbiente/>} />
        <Route path="/homologaciones" element={<Homologaciones/>} />
        <Route path="/consultoria" element={<Consultoria/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contacto" element={<Contacto/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
