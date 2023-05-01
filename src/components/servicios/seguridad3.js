import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { BsCheck } from "react-icons/bs"
import servicio3 from "../../assets/servicios/servicios3.jpg"
import seguridad5 from "../../assets/seguridad/seguridad5.jpg"
const Wrapper = styled.div`
  text-align:start;
  max-width:1170px;
  margin-bottom:20px;
  display:flex;
  gap:15px;
  flex-direction:column;
  align-items:center;
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
    max-width:300px;
    margin-bottom:12px;
  }
`
export default function Seguridad3(){
  return(
    <Wrapper>
      <h2>Auditoría de diagnóstico o Estudio de Línea Base</h2>
      <p>Con ella se determina la brecha existente entre lo ya implementado y lo que resta por implementar para cumplir con la normativa nacional vigente (Ley 29783, reglamento y modificatorias). Es a partir de este primer paso que se planifican todas las actividades necesarias para implementar un SGSST en su organización.</p>
      <br/>
      <img src={servicio3}/>
      <h2>Auditoría interna</h2>
      <p>Desarrollamos auditorias para verificar la implementación de sistemas de seguridad y salud en el trabajo de acuerdo a la norma ISO 45001. Este servicio incluye la revisión documentaria, visita a instalaciones y elaboración de informe (incluye observaciones y recomendaciones).</p>
      <h2>Auditorías obligatorias por MINTRA</h2>
      <p>Según la DS 014-2013-TR deben ejecutarse auditorías que permitan verificar la adecuación y eficacia del Sistema de Gestión de la Seguridad y Salud en el Trabajo implementado en su organización. Este servicio es realizado por un auditor registrado en el MINTRA. La periodicidad de ejecución de este tipo de auditoría varía de acuerdo al nivel de riesgo de la organización:</p>
      <ul>
        <li><BsCheck style={{scale:"1.5"}}/> Para actividades empresariales clasificadas como de alto riesgo, las auditorías deben realizarse cada dos (2) años.</li>
        <li><BsCheck style={{scale:"1.5"}}/> Para actividades empresariales que no sean de alto riesgo, las auditorías deben realizarse cada tres (3) años.</li>
        <li><BsCheck style={{scale:"1.5"}}/> Los empleadores que cuentan hasta con diez trabajadores y cuya actividad no se encuentra en el Listado de Actividades Productivas de Alto Riesgo, sólo están obligados a realizar Auditoras cuando la Inspección del Trabajo así lo ordene.</li>
      </ul>
      <img src={seguridad5}/>
    </Wrapper>
  )
}