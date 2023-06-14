import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import capacitacion from "../../assets/capacitacion.png"
import calidad from "../../assets/calidad.jpg"
const Div1 = styled.div`
  display:flex;
  gap:20px;
  width:100%;
  align-items:flex-start;
  img{
    width:50%;
    margin-top:25px;
  }
  @media(max-width:750px){
    img{
      width:100%;
    }
  }
  div{
    // background:${colors.stone["100"]};
    padding: 20px;
    border-radius:8px;
    height:100%;
  }
  @media(max-width:1000px){
    flex-direction:column-reverse;
    gap:0px;
    align-items:center;
    img{
      margin-top:0px;
    }
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
const Wrapper = styled.div`
  color: ${colors.gray.light};
  margin-bottom: 50px;
  p{
    text-align:center;
    margin-top:30px;
  }
  img{
    border-radius:12px;
  }
  @media(max-width:1000px){
    p{
      margin-bottom:30px;
    }
  }
`
export default function CapacitacionesMain(){
  return(
    <Wrapper>
      <p>Todas las empresas a nivel nacional públicas o privadas deben brindar como mínimo 4 capacitaciones al año, en materia de SST a todos sus trabajadores.</p>
      <Div1>
        <Background>
          <h2>CAPACITACIONES RELACIONADAS A SEGURIDAD Y SALUD LABORAL</h2>
          <ul>
            <li>Marco Legal en SST: Ley 29783, Reglamento y modificatorias.</li>
            <li>Conformación, funciones y responsabilidades del Comité / Supervisor de SST</li>
            <li>Sistemas de gestión de Seguridad y Salud</li>
            <li>Identificación de Peligros, Evaluación de Riesgos y Controles (IPERC)</li>
            <li>Inspecciones Internas de SST.</li>
            <li>Investigación de accidentes de trabajo.</li>
            <li>Prevención de riesgos ergonómicos</li>
            <li>Prevención de riesgos psicosociales</li>
            <li>Prevención de Emergencias: capacitación a Brigadas de lucha contra incendios, primeros auxilios, señalización y evacuación.</li>
          </ul>
        </Background>
        <img src={capacitacion} alt="imagen"/>
      </Div1>
      <Div1>
        <img src={calidad} alt="imagen"/>
        <Background>
          <h2>CAPACITACIONES RELACIONADAS A CERTIFICACIONES ISO</h2>
          <ul>
            <li>Interpretación de normas ISO 9001, 14001, 45001.</li>
            <li>Formación de auditores internos en normas ISO 9001, 14001, 45001.</li>
            <li>Gestión de riesgos y oportunidades</li>
            <li>Gestión de no conformidad y análisis de causa raíz</li>
          </ul>
          <h2>CAPACITACIONES RELACIONADAS A GESTIÓN MEDIO AMBIENTAL</h2>
          <ul>
            <li>Identificación de Aspectos y Evaluación de Impactos Ambientales.</li>
            <li>Gestión integral de residuos sólidos según DL N° 1278</li>
          </ul>
        </Background>
        
      </Div1>
    </Wrapper>
  )
}