import styled from "@emotion/styled"
import Titulo from "./titulo"
import { colors } from "../styles/colors"
import ambiente1 from "../assets/medioambiente/ambiente1.jpg"
import ambiente2 from "../assets/medioambiente/ambiente2.png"
import ambiente3 from "../assets/medioambiente/ambiente3.png"
import Servicios from "./servicios"
const Wrapper = styled.div`

  h3{
    color: ${colors.blue[500]};
    font-weight:400;
    text-align:start;
    margin-bottom:0px;
    font-size:22px;
  }
  p{
    margin-top:0px;
  }
`
const Img1 = styled.img`
  width: 640px;
`
const Img2 = styled.img`
  width: 820px;
`
const Img3 = styled.img`
  width: 1140px;
`
export default function MedioAmbienteMain(){
  return(
    <Wrapper>
      <h3>Implementación de ISO 14001 - Consultoría en Sistemas de Gestión Ambiental</h3>
      <p>Las empresas que implantan la norma ISO 14001 están demostrando que llevan a cabo su actividad conforme a los estándares que dicta esta norma en materia medioambiental, promoviendo la protección ambiental y la prevención de la contaminación que se pudiera generar.</p>
      <p>La sociedad actual posee una alta sensibilidad a los temas ambientales. Los clientes concienciados con el medio ambiente prefieren hacer negocios con empresas que comparten la misma idea. Implantar un Sistema de Gestión Ambiental es el primer paso para satisfacer las demandas de la sociedad.</p>
      <Img1 src={ambiente1}/>
      <Titulo titulo={"Beneficios de un sistema de gestión ISO 14001"}/>
      <Img3 src={ambiente3}/>
      <Titulo titulo={"¿Cómo puedo implantar ISO-14001 en mi organización?"}/>
      <p>El proceso de implantación de un Sistema de Gestión basado en la norma ISO-14001 consta de varios pasos:</p>
      <Img2 src={ambiente2}/>
      <Servicios/>
    </Wrapper>
    )
}