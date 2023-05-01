import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { BsCheck } from "react-icons/bs"
import servicio2 from "../../assets/servicios/servicios2.jpg"
const Wrapper = styled.div`
  display:flex;
  text-align:start;
  max-width:1170px;
  margin-bottom:20px;
  gap:20px;
  h2{
    color:${colors.blue[700]};
    font-weight:300;
    width:100%;
  }
  p{
    text-align:justify;
  }
  h3{
    text-align:start;
    width:100%;
    color:${colors.black};
    font-size: 22px;
    font-weight:400;
  }
  ul{
    list-style:none;
    padding-left:0;
  }
  li{
    color:${colors.gray.light};
    line-height:200%;
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
export default function Calidad2(){
  return(
    <Wrapper>
      <div>
        <p>Realizamos cursos de formación de auditores en cumplimiento de las normas internacionales de auditoría con el fin de capacitar a profesionales en el ejercicio de procesos de auditoria efectivos y eficaces que permitan a toda empresa que tenga implementado un sistema de calidad, cumplir con los correspondientes requisitos de auditoría interna objetiva e imparcial.</p>
        <br/>
        <p>Asimismo, ofrecemos cursos in house sobre interpretación de la norma ISO 9001 para los colaboradores de s organización. De este modo, nos aseguramos de la asimilación de conceptos y convertimos el proceso de implementación en un proceso fluido y dinámico que aporte valor a su Organización.</p>
        <br/>
        <p>Adicionalmente, tenemos los siguientes cursos:</p>
        <ul>
          <li><BsCheck style={{scale:"1.5"}}/> Gestión de riesgos y oportunidades</li>
          <li><BsCheck style={{scale:"1.5"}}/> Gestión de no conformidad y análisis de causa raíz</li>
        </ul>
      </div>
      <Img src={servicio2} alt="imagen"/>
    </Wrapper>
  )
}