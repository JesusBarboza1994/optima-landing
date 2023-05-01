import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { BsCheck } from "react-icons/bs"
import servicio3 from "../../assets/servicios/servicios3.jpg"
const Wrapper = styled.div`
  display:flex;
  text-align:start;
  max-width:1170px;
  margin-bottom:20px;
  gap:20px;
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
    margin-bottom:16px;
  }
  @media(max-width:480px){
    max-width:100%;
    margin-bottom:12px;
  }
`
const Img = styled.img`
  width:350px;
`
export default function Calidad3(){
  return(
    <Wrapper>
      <div>
        <p>Los procesos de Auditoria Interna tratan de demostrar mediante evidencias objetivas la eficacia de su Sistema de Gestión de la Calidad implementado en base al cumplimiento de los requisitos de la norma ISO 9001; y, además, es un requisito indispensable para optar por la Certificación del sistema de gestión.</p>
        <br/>
        <p>En ÓPTIMA CONSULTORA ofrecemos este servicio a toda Organización que desee conocer el grado de cumplimiento del Sistema de Gestión implantado, comprobar la eficacia o madurez del Sistema y cumplir con los requisitos de la propia norma de referencia.</p>
        <br/>

      </div>
      <Img src={servicio3} alt="imagen"/>
    </Wrapper>
  )
}