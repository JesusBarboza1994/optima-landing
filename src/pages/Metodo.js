import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import metodo from "../assets/metodo/metodo.png"
import MethodCard from "../components/method-card"
const Container = styled.div`

  display: flex;
  flex-direction:column;
  width:100%;
  align-items:center;
  max-width:1170px;
  margin:auto;
  padding: 50px 15px;
  p{
    font-size:16px;
    color:${colors.gray.light};
    text-align:start;
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
  }
  @media(max-width:480px){
    max-width:300px;
  }

`
const Background = styled.div`
  width:100%;
  background: ${colors.stone[100]};
  padding: 30px;
  border-radius: 12px;
  @media(max-width:480px){
    padding: 15px;
  }
`
const Div1 = styled.div`
  display:flex;
  justify-content:center;
  gap:20px;
  width:100%;
  padding-bottom:50px;
  align-items:center;
  h2{
    font-size:22px;
    color:${colors.blue[700]};
    text-align:start;
    width:100%;
    font-weight:300;
  }
  p{
    text-align:justify;
  }
  img{
    width:100%;
  }
  div{
    background:${colors.stone["100"]};
    padding: 20px;
    border-radius:8px;
    height:100%;
  }
  
  @media(max-width:1380px){
    img{
      width:100%;
    }
  }
  @media(max-width:1200px){
    img{
      width:100%;
    }
  }
  @media(max-width:990px){
    flex-direction:column;
  }
`
const Div2 = styled.div`
  div{
    width:33%;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap:20px;
  @media(max-width:750px){
    display:flex;
    flex-direction:column;
  }
`
export default function Metodo(){
  return(
    <Container>
      <Div1>
        {/* <Background>
          <p>Desde la publicación de la Ley 27942, DS 014-2019-MIMP y modificatorias, las empresas tienen la obligación de implementar dentro de sus organizaciones, las acciones legales pertinentes para evitar y prevenir el hostigamiento sexual laboral.</p>
          <p>Las obligaciones en materia de prevención y procesamiento de los actos de hostigamiento sexual son exigibles a todos los empleadores del sector privado y público, sin distinción de la conformación, de la actividad económica, del régimen laboral, ni del objeto social.</p>
          <p>Además, esta normativa tiene el objetivo de mejorar el clima laboral en sus empresas y minimizar las contingencias y posibles sanciones en materia inspectiva por la SUNAFIL.</p>
        </Background> */}
        <img src={metodo} alt="imagen" style={{width:"100%"}}/>
      </Div1>
      <Grid>
          <MethodCard col={1} row={1} number={"1."} title={"ANÁLISIS EMPRESARIAL"} text={"Nuestros servicios parten con un diagnóstico y análisis de situación y funcionamiento del cliente. Se analizan las características de la empresa/organización y las particularidades de sus procesos. Este diagnóstico nos ayudará a definir, conjuntamente con el cliente, las bases del proyecto a realizar, sea cual sea su envergadura. Luego, podremos definir los objetivos y plan de trabajo del proyecto, además de designar al Consultor más idóneo según las características del mismo."}/>
          <MethodCard col={2} row={2} number={"2."} title={"IMPLEMENTACIÓN DE PROYECTOS"} text={"La parte inicial de esta etapa consiste en la capacitación y sensibilización de su personal. Nuestros consultores se caracterizan por la capacidad de potenciar la labor del equipo en cada empresa a través de capacitación continua. Luego, se fijan los objetivos y plan de trabajo por proceso, se desarrollan los documentos asociados mientras se aportan las herramientas, técnicas y soluciones necesarias para cada caso en la implementación. Los consultores de ÓPTIMA analizan los resultados de cada etapa y valoran la consecución de los objetivos iniciales."}/>    
          <MethodCard col={3} row={3} number={"3."} title={"CONSOLIDACIÓN"} text={"Somos conscientes de que todo proceso de cambio que afecte a estrategias requiere un esfuerzo adicional para que realmente consolide su eficacia más allá de la fase de implementación liderada por nuestros consultores. A través del acompañamiento continuo, y la absolución de dudas y consultas bajo el enfoque de mejora continua, ÓPTIMA CONSULTORA provee los instrumentos necesarios para garantizar la consolidación plena de los trabajos realizados, así como la certificación correspondiente."}/>
      </Grid>
    </Container>
  )
}