import styled from "@emotion/styled"
import auditorias from "../../assets/auditorias.png"
import auditoria from "../../assets/auditoria.jpg"
import { colors } from "../../styles/colors"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
  color:${colors.gray.light};
  p{
    text-align:justify;
    margin-top:40px;
    
  }
  img{
    width:50%;
    border-radius:12px;
  }
  align-items:center;
  margin-bottom: 40px;
`
const Div1 = styled.div`
  display:flex;
  gap:20px;
  width:100%;
  align-items:flex-start;
  p{
    text-align:justify;
    margin-top:10px;
  }
  img{
    width:40%;
    margin-top:25px;
  }
  @media(max-width:750px){
    flex-direction:column-reverse;
    img{
      width:100%;
      margin-top:0px;
    }
  }
  div{
    // background:${colors.stone["100"]};
    padding: 20px;
    border-radius:8px;
    height:100%;
    padding-left:0;
  }
`
const Background = styled.div`
  width:100%;
  // background: ${colors.stone[100]};
  padding: 30px;
  
  border-radius: 12px;
  ul{
    padding-left:20px;
  }
  li{
    text-align:start;
  }
  h2{
    color:${colors.blue[500]};
    font-size:22px;
    text-align:start;
    width:100%;
    font-weight:600;
  }
  @media(max-width:480px){
    padding: 15px;
  }
`

export default function AuditoriasMain(){
  return(
    <Wrapper>
      <p>Nuestro servicio de auditoría consiste en una revisión de su Sistema de Gestión a través de la verificación de la información documentada y su nivel de implementación para determinar el grado de cumplimiento de los estándares.</p>
      <Div1>
        <Background>
          <h2>AUDITORÍAS ISO</h2>
          <p>Los procesos de Auditoria Interna tratan de demostrar mediante evidencias objetivas la eficacia de su Sistema de Gestión implementado en base al cumplimiento de los requisitos de las norma ISO; y, además, es un requisito indispensable para optar por la Certificación del sistema de gestión.</p>
          {/* <br/> */}
          <p>En ÓPTIMA CONSULTORA ofrecemos este servicio a toda Organización que desee conocer el grado de cumplimiento del Sistema de Gestión implantado, comprobar la eficacia o madurez del Sistema y cumplir con los requisitos de la propia norma de referencia.</p>
          {/* <br/> */}
          <p>Realizamos auditorías ISO 9001, 14001, 45001, entre otras.</p>
        </Background>
        <img src={auditorias}/>
      </Div1>
      <Div1>
        {/* <img src={auditoria} alt="imagen"/> */}
        <Background>
          <h2>AUDITORÍA DE DIAGNÓSTICO O ESTUDIO DE LÍNEA BASE EN SST</h2>
          <p>Con ella se determina la brecha existente entre lo ya implementado y lo que resta por implementar para cumplir con la normativa nacional vigente (Ley 29783, reglamento y modificatorias). Es a partir de este primer paso que se planifican todas las actividades necesarias para implementar un SGSST en su organización.</p>
          <br/>
          <br/>
          <h2>AUDITORÍAS OBLIGATORIAS POR MINTRA</h2>
          <p>Según la DS 014-2013-TR deben ejecutarse auditorías que permitan verificar la adecuación y eficacia del Sistema de Gestión de la Seguridad y Salud en el Trabajo implementado en su organización. Este servicio es realizado por un auditor registrado y acreditado en el MINTRA.</p>
          <p>La periodicidad de ejecución de este tipo de auditoría varía de acuerdo al nivel de riesgo de la organización:</p>
          <ul>
            <li>Para actividades empresariales clasificadas como de alto riesgo, las auditorías deben realizarse cada dos (2) años</li>
            <li>Para actividades empresariales que no sean de alto riesgo, las auditorías deben realizarse cada tres (3) años.</li>
            <li>Los empleadores que cuentan hasta con diez trabajadores y cuya actividad no se encuentra en el Listado de Actividades Productivas de Alto Riesgo, sólo están obligados a realizar Auditoras cuando la Inspección del Trabajo así lo ordene.</li>
          </ul>
        </Background>
        
      </Div1>
      
    </Wrapper>
  )
}