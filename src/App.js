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
import styled from '@emotion/styled';
import whatsapp from "./assets/whatsapp.png"
// import wsp from "./assets/wsp.png"
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
import Articulo2 from './components/articles/articulo2';
import Articulo3 from './components/articles/articulo3';
import Articulo4 from './components/articles/articulo4';
import Articulo5 from './components/articles/articulo5';
import Articulo6 from './components/articles/articulo6';
import Articulo7 from './components/articles/articulo7';
import Articulo8 from './components/articles/articulo8';
import Articulo9 from './components/articles/articulo9';

const ContainerImage = styled.div`
  display:flex;
  cursor:pointer;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  background:#4fc359;
  opacity:0.95;
  // position:fixed;
  
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
  // width:200px;
  // height:75px;
  padding: 10px;
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
  height:65px;
`
const WspText = styled.h1`
  opacity:0;
  font-size:16px;
  background:${colors.white};
  padding:6px 12px;
  border-radius:12px;
  color:${colors.gray.light};
  box-shadow:0px 0px 10px rgba(0,0,0,0.5);
`
const WhatsappContainer = styled.div`
  position:fixed;
  bottom: 50px;
  right: 20px;
  h1{
    transition: opacity 0.3s ease-out;
  }
  &:hover h1, .triangulo{
    opacity:1;
  }
`

function App() {
  function handleWhatsapp(){
    window.location.href = `
    https://api.whatsapp.com/send/?phone=51993229232&text=Hola%21+Me+gustaria+solicitar+mayor+informacion.&type=phone_number&app_absent=0`
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

        <Route path="/contacto" element={<Contacto/>} />

        <Route path="/blog" element={<Blog/>} />
        {/* Articulos */}
        <Route path="/registros-de-seguridad-y-salud-laboral-para-mypes" element={<Articulo1/>}/>
        <Route path="/partes-interesadas-o-stakeholders-en-normas-iso" element={<Articulo2/>}/>
        <Route path="/como-implemento-iso-45001-en-mi-organizacion" element={<Articulo3/>}/>
        <Route path="/seguridad-y-salud-laboral-en-condominios-y-edificios" element={<Articulo4/>}/>
        <Route path="/conoces-la-estructura-de-alto-nivel-HLS-de-los-estándares-ISO" element={<Articulo5/>}/>
        <Route path="/como-proceder-ante-una-inspección-de-sunafil" element={<Articulo6/>}/>
        <Route path="/como-implemento-iso-9001-en-mi-organizacion" element={<Articulo7/>}/>
        <Route path="/como-implemento-iso-14001-en-mi-organizacion" element={<Articulo8/>}/>
        <Route path="/seguridad-y-salud-en-el-teletrabajo" element={<Articulo9/>}/>
        
        

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
      <WhatsappContainer>
        <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
          <div>
            <WspText>¡Contáctanos!</WspText>
          </div>
          <ContainerImage onClick={handleWhatsapp}>
            <Img src={whatsapp} alt="imagen"/>
          </ContainerImage>
        </div>
      </WhatsappContainer>
      <Footer/>
    </div>
  );
}

export default App;
