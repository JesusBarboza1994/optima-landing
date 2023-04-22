import styled from "@emotion/styled"
import calidad1 from "../assets/calidad/calidad1.jpg"
import calidad2 from "../assets/calidad/calidad2.jpg"
import calidad3 from "../assets/calidad/calidad3.jpg"
import Servicios from "./servicios"
import Titulo from "./titulo"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  h3{
    color: ${colors.blue[500]};
    font-weight:400;
    text-align:start;
    margin-bottom:0px;
    font-size:22px;
    margin-top:40px;
  }
`

export default function CalidadMain(){
  return(
    <Wrapper>
      <h3>Implementación de ISO 9001 - Consultoría en Sistemas de Gestión de Calidad.</h3>
      <p>La norma ISO 9001 es una normativa internacional de gestión de la calidad aplicable a cualquier tipo de organización de cualquier sector o actividad, y perfectamente integrable con las características propias de gestión de cualquier empresa existente dada su gran flexibilidad.</p>
      <p>Un Sistema de Gestión de Calidad basado en la norma ISO 9001:2015 demuestra a los clientes y al mercado que una organización desarrolla sus actividades con el objetivo de garantizar la satisfacción del cliente y el cumplimiento de sus requisitos (contractuales, legales, entre otros), basándose en la aplicación del ciclo de mejora continua y la gestión de sus procesos.</p>
      <p>La norma ISO 9001 está basada en ocho principios de gestión de calidad:</p>
      <img src={calidad1} alt="imagen" style={{marginBottom:"60px"}}/>
      <Titulo titulo={"Beneficios de un Sistema de Gestión de Calidad ISO 9001"}/>
      <img src={calidad2} alt="imagen" style={{marginBottom:"60px"}}/>
      <Titulo titulo={"¿Cómo implemento ISO-9001 en mi organización?"}/>
      <p>Para llevar a cabo la implementación de un Sistema de Gestión de la Calidad en su organización, y poder optar a certificarse en ISO-9001, deberá seguir una serie de pasos:</p>
      <img src={calidad3} alt="imagen"/>
      <Servicios/>
    </Wrapper>
  )
}