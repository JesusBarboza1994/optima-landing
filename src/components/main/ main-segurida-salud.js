import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import seguridad from "../../assets/seguridad/seguridad4.jpg"
import Titulo from "../titulo"
import { MdLabelImportant } from "react-icons/md"
import NuestrosServicios from "../nuestros-servicios"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  img{
    padding: auto 20px;
  }
  ul{
    width:100%;
    color:${colors.gray.light};
    padding-left:0px;
  }
  li{
    width:100%;
    display:flex;
    align-items:center;
    text-align:start;
    color:${colors.gray.light};
    list-style:none;
    margin-bottom:15px;
    p{
      text-align:start;
      margin-bottom:0px;
    }
  }
  @media(max-width:750px){
    li{
      align-items:flex-start;
    }
  }
`
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

  @media(max-width:1200px){
    flex-direction:column;
    gap:0;
    div{
      padding-top:12px;
    }
    img{
      margin-top:16px;
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
  const list1 = ["Consultoría para implementación de Ley 29783 Ley de seguridad y salud en el trabajo", "Mantenimiento y mejora de sistema de gestión de SST", "Auditorías según Ley 29783 (auditor acreditado por MINTRA)"]
  const list2 = ["Elaboración, revisión y actualización de matriz IPERC", "Levantamiento y actualización de matrices legales de seguridad y salud en el trabajo.", "Capacitaciones inhouse de Seguridad y Salud Laboral."  ]
  return(
    <Wrapper>
      <Div2>
        <Background>
          <p>La Ley 29783 tiene como objetivo promover una cultura de prevención de riesgos en los centros laborales. Se puede aplicar a cualquier empresa, ya sea pública o privada de todos los sectores económicos.</p>
          <br/>
          <p>A partir de esta ley se estableció la obligación de contar con un Sistema de Gestión en Seguridad y Salud en el Trabajo.</p>
          <br/>
          <p>En ÓPTIMA CONSULTORA nos aseguramos de que cumplas con todos los requisitos previstos en la Ley 29783, su reglamento y modificatorias, de esta forma se previenen las sanciones por incumplimiento impuestas por la SUNAFIL.</p>
          <br/>
          <p>Este sistema permite a las organizaciones a contar con un lugar de trabajo seguro y saludable para sus colaboradores y partes interesadas, contribuyendo en la prevención de lesiones y problemas de salud ocupacional.</p>
        </Background>
        <img src={seguridad} alt="imagen"/>
      </Div2>
      <Titulo titulo={"Nuestros Servicios"}/>
      <NuestrosServicios list1={list1} list2={list2}/>
    </Wrapper>
  )
}