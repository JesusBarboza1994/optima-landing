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


const Wrapper = styled.div`

`
const WrapperHome = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap: 20px;
  justify-content:center;
  padding-bottom:20px;
`
const SectionMethod = styled.section`
  background: ${colors.blue[100]};
  margin:auto;
  padding:20px 0px;
`
const WrapperCard = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap: 30px;
  justify-content:space-evenly;
`
const HacemosSection = styled.section`
  max-width:945px;
  margin:auto;
  padding: 100px 0px;
  hr{
    border: 1px solid ${colors.blue[400]};
    width: 200px;
  }
  p{
    font-size:16px;
  }
`
const ParlanteSection = styled.section`
  margin:auto;
  max-width:800px;
  padding:50px 0px;
  hr{
    border: 1px solid ${colors.blue[400]};
    width: 200px;
  }
  h3{
    font-size:22px;
    font-weight:200;
  }
`
const OfferSection = styled.section`
  padding-top:40px;
  padding-bottom:20px;
  h2{
    font-weight:400;
  }
  hr{
    border: 1px solid ${colors.blue[400]};
    width: 200px;
  }
`
const ClienteSection = styled.section`
  padding-top: 40px;
  paddig-bottom: 40px;
  margin-bottom:100px;
  hr{
    border: 1px solid ${colors.blue[400]};
    width: 200px;
    margin-bottom: 20px;
  }
`
const Banner = styled.div`
  background-image: url(${banner});
  height: 460px;
  display:flex;
  justify-content:center;
  align-items:center;
  div{
    max-width:1170px;
  }
  p{
    font-size:18px;
  }
  h3{
    font-size:28px;
    font-weight: 400;
  }
`


export default function Home(){
  return(
    <Wrapper>
      <Portada/>
      <HacemosSection>
        <img src={conexiones} alt='imagen'/>
        <h2>¿QUÉ HACEMOS?</h2>
        <hr/>
        <p>En OPTIMA tenemos más de 10 años de experiencia trabajando con empresas de diferentes sectores, facilitando la adecuación a Normas ISO y muchos otros estándares, asesorando en adaptación eficiente a nuevos requisitos legales para empresas y organizaciones que necesitan ser más competitivas y sostenibles.</p>
      </HacemosSection>
      <ParlanteSection>
        <img src={parlante} alt='imagen'/>
        <h3>Hacemos posible que tu empresa se diferencie y adelante a la competencia, con soluciones completas.</h3>
        <hr/>
      </ParlanteSection>
      <WrapperCard>
        <CardHome img={sitemaiso} title={"Sistemas de Gestión ISO"} text={'"Implementación y mantenimiento de sistemas de gestión basados en estándares internacionales como lo son las normas ISO 9001, ISO 14001, ISO 45001, entre otros."'}/>
        <CardHome img={sst} title={"Ley de SST"} text={'"Consultoría e implementación en la Ley 29783 Ley de seguridad y salud en el trabajo, su reglamento y modificatorias."'}/>
        <CardHome img={consultoriaorganizacional} title={"Consultoría Organizacional"} text={'"Asesoría técnica para la mejora de procesos y estructura organizativa de manera que apoyen efectivamente la implementación de su estrategia empresarial."'}/>
      </WrapperCard>
      <OfferSection>
        <img src={metodo} alt='imagen'/>
        <h2>EL MÉTODO</h2>
        <hr/>
      </OfferSection>
      <SectionMethod>
        <WrapperHome>
          <MethodHome number={1} process={"Diagnóstico"} method={"Análisis Empresarial"} text={"Porque cuando se desean soluciones reales, verídicas, apropiadas a cada situación, es imprescindible un buen diagnóstico."}/>
          <MethodHome number={2} process={"Proyectos"} method={"Implementación de proyectos"} text={"Capacitamos y sensibilizamos a su personal, para fijar los objetivos y plan de trabajo."}/>
          <MethodHome number={3} process={"Seguimiento"} method={"Consolidación"} text={"Proveemos los instrumentos necesarios para garantizar el control continuo y la consolidación plena de los trabajos realizados."}/>
        </WrapperHome>
      </SectionMethod>
      <ClienteSection>
        <img src={clientes} alt="imagen"/>
        <h3>NUESTROS CLIENTES</h3>
        <hr/>
        <ListClientes/>
      </ClienteSection>
      <Banner>
        <div>
          <h3>QUEREMOS OFRECER SERVICIOS EXCELENTES</h3>
          <p><FaQuoteLeft/> También nos preocupamos por establecer alianzas con otras empresas y de formarnos en nuevos campos de actividad para poder crecer continuamente y cubrir de este modo el mayor número de necesidades de nuestros clientes. <FaQuoteRight/></p>
        </div>
      </Banner>

     
    </Wrapper>
  )
}