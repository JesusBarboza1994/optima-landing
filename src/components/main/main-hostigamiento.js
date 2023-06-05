import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { MdLabelImportant } from "react-icons/md"
import Titulo from "../titulo"
import hostigamiento from "../../assets/hostigamiento/hostigamiento.png"
import NuestrosServicios from "../nuestros-servicios"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  img{
    padding: auto 20px;
  }
`
const Div1 = styled.div`
  display:flex;
  justify-content:center;
  gap:20px;
  width:100%;
  align-items:center;
  margin-bottom:20px;
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
    max-width:570px;
    border-radius:12px;
  }
  div{
    background:${colors.stone["100"]};
    padding: 20px;
    border-radius:8px;
    height:100%;
  }
  
  @media(max-width:1380px){
    img{
      max-width:500px;
    }
  }
  @media(max-width:1200px){
    img{
      max-width:455px;
    }
  }
  @media(max-width:990px){
    flex-direction:column;
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

export default function HostigamientoMain(){
  const list1 = ["Elección y formación del Comité de intervención frente al Hostigamiento Sexual Laboral.", "Elaboración de procedimientos y políticas para la prevención del hostigamiento sexual laboral.", "Evaluación para identificar las posibles situaciones de Hostigamiento Sexual en la organización."]
  const list2 = ["Capacitación a todos los trabajadores sobre Hostigamiento Sexual en el trabajo", "Capacitación a los trabajadores de Gestión Humana y al Comité en sus tareas y funciones frente al Hostigamiento Sexual."]
  return(
    <Wrapper>
      <Div1>
        <Background>
            <p>Desde la publicación de la Ley 27942, DS 014-2019-MIMP y modificatorias, las empresas tienen la obligación de implementar dentro de sus organizaciones, las acciones legales pertinentes para evitar y prevenir el hostigamiento sexual laboral.</p>
            <br/>
            <p>Las obligaciones en materia de prevención y procesamiento de los actos de hostigamiento sexual son exigibles a todos los empleadores del sector privado y público, sin distinción de la conformación, de la actividad económica, del régimen laboral, ni del objeto social.</p>
            <br/>
            <p>Además, esta normativa tiene el objetivo de mejorar el clima laboral en sus empresas y minimizar las contingencias y posibles sanciones en materia inspectiva por la SUNAFIL.</p>
        </Background>
        <img src={hostigamiento} alt="imagen" />
      </Div1>
      <Titulo titulo={"Nuestros Servicios"}/>
      <NuestrosServicios list1={list1} list2={list2}/>
    </Wrapper>
  )
}