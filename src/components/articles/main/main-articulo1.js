import styled from "@emotion/styled"
import { colors } from "../../../styles/colors"
import articulo1 from "../../../assets/articles/articulo1.png"
const Wrapper = styled.div`
  margin-bottom:30px;
  color:${colors.gray.light};
  p{
    text-align:justify;
  }
  h3{
    widht:100%;
    text-align:start;
    margin-top:15px;
  }
  ul{
    width:100%;
  }
  li{
    width:100%;
    text-align:start;
  }
  h2{
    width:100%;
    text-align:start;
    margin-top:10px;
  }
  img{
    margin: 20px auto;
  }
  h4{
    widht:100%;
    text-align:start;
    margin-top: 10px;
  }
  div{
    text-align:start;
  }
`
export default function MainArticulo1(){
  return(
    <Wrapper>
      <p>El 20 de agosto del 2011 se publicó en el Diario Oficial El Peruano la Ley Nº 29783, Ley de Seguridad y Salud en el Trabajo y el 25 de abril de 2012 se publicó el D.S. N° 005-2012-TR, mediante el cual se aprobó el Reglamento de la Ley 29783.</p>
      <p>La normativa es aplicable a todos los sectores económicos y de servicios y trabajadores en general, convirtiéndose en el estándar mínimo a cumplir en materia de Prevención de Riesgos Laborales. Según la ley 29783, se establece la obligación empresarial de contar con un Sistema de Gestión de Seguridad y Salud en el Trabajo, entre otras obligaciones.</p>
      <h3>Registros para Pequeña Empresa</h3>
      <ul>
        <li>Registro de accidentes de trabajo, enfermedades ocupacionales, incidentes peligrosos y otros incidentes.</li>
        <li>Registro de exámenes médicos ocupacionales.</li>
        <li>Registro de seguimiento.</li>
        <li>Registro de evaluación del Sistema de Gestión de Seguridad y Salud en el Trabajo. </li>
        <li>Registro de estadísticas de seguridad y salud.</li>
      </ul>
      <h3>Registros para Micro Empresa</h3>
      <ul>
        <li>Registro de accidentes de trabajo, enfermedades ocupacionales, incidentes peligrosos y otros incidentes.</li>
        <li>Registro de exámenes médicos ocupacionales.</li>
        <li>Registro de inspecciones internas de segurdad y salud en el trabajo</li>
      </ul>
      <h2>Partes interesadas o Stakeholders con normas ISO</h2>
      <img src={articulo1}/>
      <h4>¿Qué son las Partes Interesadas?</h4>
      <p>Las personas u organizaciones internas/externas que pueden afectar o verse afectadas por una decisión o actividad de tu organización. </p>
      <p>La más comunes son: clientes, proveedores, trabajadores, accionistas, organismos estatales, competidores, entidades financieras, entre otros.</p>
      <h4>Identifiquemos sus requisitos</h4>
      <p>Se deben identificar las necesidades y/o expectativas de las partes interesadas, aquello que esperan de tu organización.</p>
      <h4>Definamos su importancia</h4>
      <p>Las partes interesadas pueden tener diferentes niveles de autoridad, los cuales afectaran a su forma de ejercer influencia sobre nuestro sistema de gestión.</p> 
      <p>Para determinar mejor su importancia, podría aplicarse la matriz Influencia / Impacto.</p> 
      <h4>Implementemos acciones</h4> 
      <p>Según la clasificación obtenida para cada parte interesada en la matriz, se debe plantear el compromiso que va a existir por parte de nuestra empresa para mitigar su posible impacto.</p>
      <h2>¿Cómo implemento ISO-45001 en mi organización?</h2>
      <p>Para llevar a cabo la implementación de un Sistema de Gestión de la Seguridad y Salud en su organización, y poder certificarse en ISO-45001, deberá seguir una serie de pasos:</p>

      
    </Wrapper>
  )
}