import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import seguridad from "../../assets/seguridad/seguridad4.jpg"

const Div2 = styled.div`
  display:flex;
  width:100%;
  gap:50px;
  align-items:center;
  justify-content: center;
  img{
    max-width:400px;
    border-radius:12px;
  }
  div{
    font-size:18px;
    color:${colors.gray.light};
    padding-right:20px;
  }
  p{
    text-align:justify;
  }
  margin-bottom:60px;

  @media(max-width:1200px){
    flex-direction:column;
    gap:0;
    div{
      padding-top:12px;
    }
  }
  @media(max-width:475px){
    img{
      max-width:300px;
    }
  }
`
const Background = styled.div`
  width:100%;
  background: ${colors.stone[100]};
  padding: 30px;
  border-radius: 12px;
  @media(max-width:480px){
    padding: 15px;
  }
`
export default function mainSeguridad(){
  return(
    <Div2>
        <Background>
          <p>La Ley 29783 tiene como objetivo promover una cultura de prevención de riesgos en los centros laborales. Se puede aplicar a cualquier empresa, ya sea pública o privada de todos los sectores económicos.</p>
          <p>A partir de esta ley se estableció la obligación de contar con un Sistema de Gestión en Seguridad y Salud en el trabajo.</p>
          <p>En ÓPTIMA CONSULTORA nos aseguramos de que cumplas con todos los requisitos previstos en la Ley 29783, su reglamento y modificatorias, de esta forma se previenen las sanciones por incumplimiento impuestas por la SUNAFIL.</p>
          <p>Este sistema permite a las organizaciones a contar con un lugar de trabajo seguro y saludable para sus colaboradores y partes interesadas, contribuyendo en la prevención de lesiones y problemas de salud ocupacional y bajo el enfoque de mejora de manera continua en el desempeño de su sistema de gestión.</p>
        </Background>
        <img src={seguridad} alt="imagen"/>
      </Div2>
  )
}