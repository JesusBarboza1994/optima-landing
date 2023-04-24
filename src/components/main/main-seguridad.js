import styled from "@emotion/styled"
import seguridad1 from "../../assets/seguridad/seguridad1.jpg"
import seguridad2 from "../../assets/seguridad/seguridad2.png"
import seguridad3 from "../../assets/seguridad/seguridad3.png"
import seguridad4 from "../../assets/seguridad/seguridad4.jpg"
import { colors } from "../../styles/colors"
import Titulo from "../titulo"
import Servicios from "../servicios"

const Wrapper = styled.div`
  margin:50px 0px;

`
const Div1 = styled.div`
  display:flex;
  gap:20px;
  padding-bottom:50px;
  // flex-wrap:wrap;
  div{
    width:50%;
  }
  h2{
    font-size:22px;
    color:${colors.blue[200]};
    text-align:start;
    width:100%;
    font-weight:300;
  }
  p{
    text-align:justify;
  }
`
const SubTitle = styled.h2`
  font-size:22px;
  color:${colors.blue[500]};
  font-weight:400;
  margin-top:40px;
`
const Div2 = styled.div`
  display:flex;
  gap:50px;
  align-items:center;
  div{
    font-size:18px;
    color:${colors.gray.light};
    padding-right:20px;
  }
  p{
    text-align:justify;
  }
  margin-bottom:60px;
`

export default function SeguridadMain(){
  return(
    <Wrapper>
      <Div1>
        <div>
          <h2>Implementación de ISO 45001 - Consultoría en Sistemas de Gestión de Seguridad y Salud en el Trabajo.</h2>
          <p>La norma ISO 45001 está enfocada a la Seguridad y Salud en el trabajo, persiguiendo la mejora continua por parte de la organización, dado que este es uno de los elementos básicos de la gestión empresarial.</p>
          <p>En el contexto actual se hace necesario contar con un elemento objetivo para comunicar a empleados, clientes, accionistas y otras partes interesadas no sólo el compromiso de la organización con la seguridad y salud de sus empleados sino también que la política de seguridad y salud en el trabajo se está aplicando adecuadamente, con una voluntad de mejora continua.</p>
        </div>
        <img src={seguridad1} alt="imagen" style={{width:"555px"}}/>
      </Div1>
      <Titulo titulo={"Beneficios de un sistema de gestión ISO 45001"}/>
      <img src={seguridad2} alt="imagen" style={{width:"900px"}}/>
      <Titulo titulo={"¿Cómo implemento ISO-45001 en mi organización?"}/>
      <p>Para llevar a cabo la implementación de un Sistema de Gestión de la Seguridad y Salud en su organización, y poder certificarse en ISO-45001, deberá seguir una serie de pasos:</p>
      <img src={seguridad3} alt="imagen" style={{width:"850px"}}/>
      <SubTitle>Implementación Ley 29783 - Ley de Seguridad y Salud en el Trabajo</SubTitle>
      <Div2>
        <img src={seguridad4} alt="imagen" style={{width:"555px"}}/>
        <div>
          <p>La Ley 29783 tiene como objetivo promover una cultura de prevención de riesgos en los centros laborales. Se puede aplicar a cualquier empresa, ya sea pública o privada de todos los sectores económicos.</p>
          <p>A partir de esta ley se estableció la obligación de contar con un Sistema de Gestión en Seguridad y Salud en el trabajo.</p>
          <p>En ÓPTIMA CONSULTORA nos aseguramos de que cumplas con todos los requisitos previstos en la Ley 29783, su reglamento y modificatorias, de esta forma se previenen las sanciones por incumplimiento impuestas por la SUNAFIL.</p>
          <p>Este sistema permite a las organizaciones a contar con un lugar de trabajo seguro y saludable para sus colaboradores y partes interesadas, contribuyendo en la prevención de lesiones y problemas de salud ocupacional y bajo el enfoque de mejora de manera continua en el desempeño de su sistema de gestión.</p>
        </div>
      </Div2>
      <Servicios/>
    </Wrapper>
  )
}