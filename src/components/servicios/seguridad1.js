import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { BsCheck } from "react-icons/bs"

const Wrapper = styled.div`
  text-align:start;
  max-width:1170px;
  p{
    text-align:justify;
  }
  @media(max-width:1200px){
    max-width:970px;
  }
  @media(max-width:990px){
    max-width:750px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  @media(max-width:750px){
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    max-width:450px;
  }
  @media(max-width:480px){
    max-width:300px;
  }
`
export default function Seguridad1(){
  return(
    <Wrapper>
      <p>En la actualidad, la organización que dispone de un sistema de gestión debe ser consciente de que el cumplimiento de los requisitos implica una serie de tareas periódicas como el seguimiento de objetivos y metas, la planificación del sistema, el registro y tratamiento de no conformidades, la revisión de indicadores, la actualización documentaria (procedimientos, planes, formatos, etc.), entre otras, en pro de la mejora y optimización del sistema.</p>
      <br/>
      <p>Todas estas actividades suponen una dificultad concreta e implican la necesidad de establecer metodologías de trabajo muy definidas que aseguren el control en todo momento de cada uno de los elementos que forman parte del sistema de gestión. Como parte del trabajo que realizamos, les ofrecemos hacernos cargo de dichas tareas, y que ustedes puedan concentrase en las actividades principales de su negocio.</p>
      <br/>
      <p>Adicionalmente, recordemos que el incumplimiento de la normativa nacional vigente en materia de seguridad y salud en el trabajo acarrea la probabilidad de adquirir sanciones.</p>
    </Wrapper>
  )
}