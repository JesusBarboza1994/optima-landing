import clientes from '../assets/clientes.png'
import conexiones from '../assets/conexiones.png'
import parlante from '../assets/parlante.png'
import metodo from '../assets/metodo.png'
import banner from '../assets/banner.jpg'
import styled from '@emotion/styled'
import consultoriaorganizacional from '../assets/consultoriaorganizacional.jpg'
import sst from '../assets/sst.jpg'
import sitemaiso from '../assets/sistemaiso.jpg'
import MethodHome from '../components/method-home'
import { colors } from '../styles/colors'
import CardHome from '../components/card-home'
import ListClientes from '../components/list-clientes'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Portada from '../components/portada-home'
import {FiArrowDown, FiArrowUpRight} from "react-icons/fi"
import { Link } from 'react-router-dom'


const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`
const WrapperHome = styled.div`
  display: flex;
  gap: 20px;
  justify-content:center;
  padding-bottom:20px;
  @media(max-width:1000px){
    flex-direction:column;
    max-width:750px;
    margin:auto;
    p{
      text-align:center;
    }
  }
`
const SectionMethod = styled.section`
  background: ${colors.blue[100]};
  margin:auto;
  padding:20px 0px;
  color: ${colors.gray.medium};
  width:100%;
  cursor:pointer;
  &:hover{
      scale: 1.1;
  }
`
const WrapperCard = styled.div`
  display: flex;
  justify-content:center;
  gap:20px;
  @media(max-width:1000px){
    flex-direction:column;
    align-items:center;
    gap:20px;
  }
`
const HacemosSection = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  max-width:945px;
  margin:auto;
  padding: 50px 20px;
  hr{
    border-top: 1px solid ${colors.blue[400]};
    width: 200px;
    margin: 20px auto;
  }
  p{
    font-size:16px;
    color:${colors.gray.light}
  }
  h2{
    font-size:20px;
    color:${colors.gray.medium};
    font-weight:400;
    margin-top:20px;
  }
`
const ParlanteSection = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:auto;
  max-width:800px;
  padding:50px 20px;
  hr{
    border-top: 1px solid ${colors.blue[400]};
    width: 200px;
    margin:20px auto;
  }
  h2{
    font-size:22px;
    color:${colors.gray.medium};
    font-weight:400;
  }
`
const OfferSection = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:40px;
  padding-bottom:20px;
  h2{
    font-size:22px;
    color:${colors.gray.medium};
    font-weight:400;
    margin-top:20px;
  }
  hr{
    border-top: 1px solid ${colors.blue[400]};
    width: 200px;
    margin:20px auto;
  }
`
const ClienteSection = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top: 40px;
  paddig-bottom: 40px;
  margin-bottom:100px;
  h2{
    font-size:22px;
    color:${colors.gray.medium};
    font-weight:400;
    margin-top:20px;
  }
  hr{
    border-top: 1px solid ${colors.blue[400]};
    width: 200px;
    margin:20px auto;
  }
`
const Banner = styled.div`
  background-image: url(${banner});
  height: 460px;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow: auto;
  position: relative;
  background-size: cover;
  background-position: center;
  div{
    max-width:1170px;
  }
  p{
    font-size:18px;
    color:${colors.black};
    font-weight:700;
    line-height:200%;
    padding: 0 20px;
  }
  h3{
    font-size:28px;
    margin-bottom: 15px;
    font-weight: 400;
    color:${colors.black};
  }
`


export default function Home(){
  function moverImagen() {
    const contenedor = document.querySelector('.contenedor');
    const desplazamiento = contenedor.scrollTop;
  
    contenedor.style.backgroundPositionY = -desplazamiento + 'px';
  }
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Volver al principio de la página al hacer clic en un enlace
  };

  return(
    <Wrapper>
      <Portada/>
      <HacemosSection>
        <img src={conexiones} alt='imagen'/>
        <h2>¿QUÉ HACEMOS?</h2>
        <hr/>
        <p>En ÓPTIMA tenemos más de 10 años de experiencia trabajando con empresas de diferentes sectores, facilitando la adecuación a Normas ISO y muchos otros estándares, asesorando en adaptación eficiente a nuevos requisitos legales para empresas y organizaciones que necesitan ser más competitivas y sostenibles.</p>
        <br/>
      </HacemosSection>
      {/* <ParlanteSection>
        <img src={parlante} alt='imagen'/>
        <h2>Hacemos posible que tu empresa se diferencie y adelante a la competencia, con soluciones completas.</h2>
        <hr/>
      </ParlanteSection> */}
      <WrapperCard>
        <Link style={{textDecoration:"none"}} to={"/sistema-gestion-iso"}>
          <CardHome img={sitemaiso} title={"Sistemas de Gestión ISO"} text={'"Implementación y mantenimiento de sistemas de gestión basados en estándares internacionales como lo son las normas ISO 9001, ISO 14001, ISO 45001, entre otros."'}/>
        </Link>
        <Link style={{textDecoration:"none"}} to={"seguridad-y-salud-laboral"}>
          <CardHome img={sst} title={"Ley de Seguridad y Salud Laboral"} text={'"Consultoría e implementación en la Ley 29783 Ley de seguridad y salud en el trabajo, su reglamento y modificatorias."'}/>
        </Link>
        <Link style={{textDecoration:"none"}} to={"/homologaciones"}>
          <CardHome img={consultoriaorganizacional} title={"Homologación de Proveedores"} text={'"Asesoría técnica y documentaria para aprobar los procesos de análisis, verificación y evaluación de diferentes aspectos de su organización requeridos por sus clientes a través de empresas certificadoras."'}/>
        </Link>
      </WrapperCard>
      <br/>
      <OfferSection>
        <img src={metodo} alt='imagen'/>
        <h2>¿CÓMO LO HACEMOS?</h2>
        <hr/>
      </OfferSection>
      <SectionMethod>
        <Link to={"/metodo"} style={{textDecoration: "none", color:colors.gray.light}} onClick={handleLinkClick}>
          <WrapperHome>
            <MethodHome number={1} process={"Diagnóstico"} method={"Análisis Empresarial"} text={"Porque cuando se desean soluciones reales, verídicas, apropiadas a cada situación, es imprescindible un buen diagnóstico."}/>
            <MethodHome number={2} process={"Proyectos"} method={"Implementación de proyectos"} text={"Capacitamos y sensibilizamos a su personal, para fijar los objetivos y plan de trabajo."}/>
            <MethodHome number={3} process={"Seguimiento"} method={"Consolidación"} text={"Proveemos los instrumentos necesarios para garantizar el control continuo y la consolidación plena de los trabajos realizados."}/>
          </WrapperHome>
        </Link>
      </SectionMethod>
      <ClienteSection>
        <img src={clientes} alt="imagen"/>
        <h2>NUESTROS CLIENTES</h2>
        <hr/>
        <ListClientes/>
      </ClienteSection>
      <Banner onScroll={moverImagen}>
        <div>
          <h3>QUEREMOS OFRECER SERVICIOS EXCELENTES</h3>
          <p><FaQuoteLeft style={{scale:"2", marginRight:"6px"}}/> También nos preocupamos por establecer alianzas con otras empresas y de formarnos en nuevos campos de actividad para poder crecer continuamente y cubrir las necesidades de nuestros clientes. 
             <FaQuoteRight style={{scale:"2", marginLeft:"6px"}}/>
          </p>
        </div>
      </Banner>

     
    </Wrapper>
  )
}