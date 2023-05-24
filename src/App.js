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
import styled from '@emotion/styled';
import whatsapp from "./assets/whatsapp.png"
import wsp from "./assets/wsp.png"
import NavbarSection from './components/Navbar/Navbar02';
import SistemaGestionIso from './pages/SistemaGestionIso';
import Hostigamiento from './pages/Hostigamiento';
import SeguridadSaludLaboral from './pages/SeguridadSaludLaboral';
import Banner from './components/banner';
import Metodo from './pages/Metodo';
import Antisoborno from './pages/Antisoborno';
import { colors } from './styles/colors';
import Capacitaciones from './pages/Capacitaciones';
import Auditorias from './pages/Auditorias';
import Articulo1 from './components/articles/articulo1';

const ContainerImage = styled.div`
  display:flex;
  cursor:pointer;
  align-items:center;
  justify-content:center;
  // width:200px;
  padding: 4px 10px 4px 15px;
  // height:75px;
  border-radius:36px 0 0 36px;
  background:#4fc359;
  opacity:0.95;
  position:fixed;
  bottom: 50px;
  right: 20px;
  h2{
    color:${colors.white};
    font-size:20px;
  }
  @media(max-width:650px){
    right:-10px;
    scale:0.8;
  }
`
const ContainerImage2 = styled.div`
  display:flex;
  cursor:pointer;
  align-items:center;
  justify-content:center;
  width:200px;
  height:75px;
  opacity:0.95;
  position:fixed;
  bottom: 50px;
  right: 20px;
  @media(max-width:650px){
    right:20px;
    scale:0.8;
  }
`
const Img = styled.img`
  height:50px;
`

function App() {
  function handleWhatsapp(){
    window.location.href = `
    https://api.whatsapp.com/send/?phone=51993229232&text=Hola+Diana%21+Me+gustaria+conversar+sobre+un+proyecto+contigo.&type=phone_number&app_absent=0`
  }
  return (
    <div className="App">
      {/* <Navbar/> */}
      <NavbarSection/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />

        <Route path="/sistema-gestion-iso" element={<SistemaGestionIso/>} />
        <Route path="/calidad" element={<Calidad/>} />
        <Route path="/seguridad-y-salud" element={<SeguridadSalud/>} />
        <Route path="/medio-ambiente" element={<MedioAmbiente/>} />
        <Route path="/anti-soborno" element={<Antisoborno/>} />
        
        <Route path="/seguridad-y-salud-laboral" element={<SeguridadSaludLaboral/>} />
        <Route path="/homologaciones" element={<Homologaciones/>} />
        <Route path="/hostigamiento" element={<Hostigamiento/>} />
        <Route path="/consultoria" element={<Consultoria/>} />
        <Route path="/metodo" element={<Metodo/>} />

        {/* Servicios */}
        <Route path="/capacitaciones" element={<Capacitaciones/>} />
        <Route path="/auditorias" element={<Auditorias/>} />

        <Route path="/blog" element={<Blog/>} />
        {/* Articulos */}
        <Route path="/articulo1" element={<Articulo1/>}/>

        <Route path="/contacto" element={<Contacto/>} />


        {/* <Route path="/calidad/1" element={<Template title={"Calidad"} descrip={"Mantenimiento"} Main={Calidad1} />} />
        <Route path="/calidad/2" element={<Template title={"Calidad"} descrip={"Capacitaciones"} Main={Calidad2} />} />
        <Route path="/calidad/3" element={<Template title={"Calidad"} descrip={"Auditoría"} Main={Calidad3} />} /> */}
        {/* <Route path="/seguridad-y-salud/1" element={<Template title={"Seguridad y Salud"} descrip={"Mantenimiento"} Main={Seguridad1} />} />
        <Route path="/seguridad-y-salud/2" element={<Template title={"Seguridad y Salud"} descrip={"Capacitaciones"} Main={Seguridad2} />} />
        <Route path="/seguridad-y-salud/3" element={<Template title={"Seguridad y Salud"} descrip={"Auditoría"} Main={Seguridad3} />} /> */}
        {/* <Route path="/medio-ambiente/1" element={<Template title={"Medio Ambiente"} descrip={"Mantenimiento"} Main={Medio1} />} />
        <Route path="/medio-ambiente/2" element={<Template title={"Medio Ambiente"} descrip={"Capacitaciones"} Main={Medio2} />} />
        <Route path="/medio-ambiente/3" element={<Template title={"Medio Ambiente"} descrip={"Auditoría"} Main={Medio3} />} /> */}
      </Routes>
      <ContainerImage onClick={handleWhatsapp}>
        <Img src={whatsapp} alt="imagen"/>
        <h2>CONTACTAR</h2>
      </ContainerImage>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
