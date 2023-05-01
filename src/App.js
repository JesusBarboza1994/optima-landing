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
import Template from './components/template-page';
import Calidad1 from './components/servicios/calidad1';
import Calidad2 from './components/servicios/calidad2';
import Calidad3 from './components/servicios/calidad3';
import Seguridad1 from './components/servicios/seguridad1';
import Seguridad2 from './components/servicios/seguridad2';
import Seguridad3 from './components/servicios/seguridad3';
import Medio1 from './components/servicios/medio1';
import Medio2 from './components/servicios/medio2';
import Medio3 from './components/servicios/medio3';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/calidad" element={<Calidad/>} />
        <Route path="/calidad/1" element={<Template title={"Calidad"} descrip={"Mantenimiento"} Main={Calidad1} />} />
        <Route path="/calidad/2" element={<Template title={"Calidad"} descrip={"Capacitaciones"} Main={Calidad2} />} />
        <Route path="/calidad/3" element={<Template title={"Calidad"} descrip={"Auditoría"} Main={Calidad3} />} />
        <Route path="/seguridad-y-salud" element={<SeguridadSalud/>} />
        <Route path="/seguridad-y-salud/1" element={<Template title={"Seguridad y Salud"} descrip={"Mantenimiento"} Main={Seguridad1} />} />
        <Route path="/seguridad-y-salud/2" element={<Template title={"Seguridad y Salud"} descrip={"Capacitaciones"} Main={Seguridad2} />} />
        <Route path="/seguridad-y-salud/3" element={<Template title={"Seguridad y Salud"} descrip={"Auditoría"} Main={Seguridad3} />} />
        <Route path="/medio-ambiente" element={<MedioAmbiente/>} />
        <Route path="/medio-ambiente/1" element={<Template title={"Medio Ambiente"} descrip={"Mantenimiento"} Main={Medio1} />} />
        <Route path="/medio-ambiente/2" element={<Template title={"Medio Ambiente"} descrip={"Capacitaciones"} Main={Medio2} />} />
        <Route path="/medio-ambiente/3" element={<Template title={"Medio Ambiente"} descrip={"Auditoría"} Main={Medio3} />} />
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
