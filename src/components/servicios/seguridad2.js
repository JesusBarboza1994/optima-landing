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
export default function Seguridad2(){
  return(
    <Wrapper>
      <div>
        <p>Contamos con capacitaciones en seguridad y salud en el trabajo in house que son dictada por profesionales especialistas.</p>
        <br/>
        <ul>
          <li> 1. Formación de auditores internos.</li>
          <li> 2. Interpretación de la norma ISO 45001.</li>
          <li>3. Ley de SST (Reglamento y Modificaciones).</li>
          <li>4. Conformación, funciones y responsabilidades del Comité/Supervisor de SST.</li>
          <li>5. Identificación de Peligros y Evaluación de Riesgos.</li>
          <li>6. Inspecciones Internas de SST.</li>
          <li>7. Investigación de accidentes de trabajo.</li>
        </ul>
      </div>
      <Img src={servicio2} alt="imagen"/>
    </Wrapper>
  )
}