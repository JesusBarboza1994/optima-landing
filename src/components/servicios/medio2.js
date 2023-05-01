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
  max-width:555px;
  @media(max-width:1200px){
    max-width:455px;
  }
  @media(max-width:500px){
    width:100%;
  }
`
export default function Medio2(){
  return(
    <Wrapper>
      <div>
        <p>Contamos con capacitaciones en seguridad y salud en el trabajo in house que son dictada por profesionales especialistas.</p>
        <br/>
        <ul>
          <li><BsCheck style={{scale:"1.5"}}/>  Formación de auditores internos.</li>
          <li><BsCheck style={{scale:"1.5"}}/>  Interpretación de la norma ISO 14001.</li>
          <li><BsCheck style={{scale:"1.5"}}/>  Identificación de Aspectos y Evaluación de Impactos Ambientales.</li>
          <li><BsCheck style={{scale:"1.5"}}/>  Gestión integral de residuos sólidos según DL N° 1278</li>
        </ul>
      </div>
      <Img src={servicio2} alt="imagen"/>
    </Wrapper>
  )
}