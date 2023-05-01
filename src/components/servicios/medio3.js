import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { BsCheck } from "react-icons/bs"
import servicio3 from "../../assets/servicios/servicios3.jpg"
import ambiente4 from "../../assets/medioambiente/ambiente4.jpg"
const Wrapper = styled.div`
  display:flex;
  text-align:start;
  align-items:center;
  max-width:1170px;
  margin-bottom:20px;
  gap:20px;
  h2{
    color:${colors.black};
    font-weight:600;
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
  margin-bottom:12px;
  @media(max-width:1200px){
    max-width:455px;
  }
  @media(max-width:500px){
    width:100%;
  }
`
export default function Medio3(){
  return(
    <Wrapper>
      <div>
        <h2>Auditoría de diagnóstico</h2>
        <p>Con ella se determina la brecha existente entre lo ya implementado y lo que resta por implementar para cumplir con la normativa ISO 14001 y normativa en materia medioambiental vigente. Es a partir de este primer paso que se planifican todas las actividades necesarias para implementar un SGMA en su organización.</p>
        <br/>
        <h2>Auditoría interna</h2>
        <p>Desarrollamos auditorias para verificar la implementación de sistemas de seguridad y salud en el trabajo de acuerdo a la norma ISO 14001. Este servicio incluye la revisión documentaria, visita a instalaciones y elaboración de informe (incluye observaciones y recomendaciones).</p>
        <br/>
      </div>
      <div>
        <Img src={ambiente4} alt="imagen"/>
        <Img src={servicio3} alt="imagen"/>
      </div>
    </Wrapper>
  )
}