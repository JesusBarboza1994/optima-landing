import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { MdLabelImportant } from "react-icons/md"
import Titulo from "../titulo"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;

  align-items:center;
  h3{
    color: ${colors.blue[500]};
    font-weight:400;
    text-align:start;
    margin-bottom:10px;
    font-size:22px;
    margin-top:10px;
    width:100%;
  }
  p{
    width:100%;
    margin-bottom:15px;
    text-align:justify;
    color:${colors.gray.light};
  }
  ul{
    width:100%;
    color:${colors.gray.light};
    padding-left:0px;
  }
  li{
    width:100%;
    display:flex;
    align-items:center;
    text-align:start;
    color:${colors.gray.light};
    list-style:none;
    margin-bottom:15px;
    p{
      text-align:start;
      margin-bottom:0px;
    }
  }
  @media(max-width:750px){
    li{
      align-items:flex-start;
    }
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

export default function AntisobornoMain(){
  return(
    <Wrapper>
      <Background>
        <p>La norma ISO 9001 es una normativa internacional de gestión de la calidad aplicable a cualquier tipo de organización de cualquier sector o actividad, y perfectamente integrable con las características propias de gestión de cualquier empresa existente dada su gran flexibilidad.</p>
        <p>Un Sistema de Gestión de Calidad basado en la norma ISO 9001:2015 demuestra a los clientes y al mercado que una organización desarrolla sus actividades con el objetivo de garantizar la satisfacción del cliente y el cumplimiento de sus requisitos (contractuales, legales, entre otros), basándose en la aplicación del ciclo de mejora continua y la gestión de sus procesos.</p>
      </Background>
      <Titulo titulo={"Nuestros Servicios"}/>
      <ul>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Consultoría para implementación ISO 37001</p></li>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Auditorías internas</p></li>
      </ul>
    </Wrapper>
  )
}