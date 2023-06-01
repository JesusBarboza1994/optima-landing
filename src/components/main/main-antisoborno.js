import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { MdLabelImportant } from "react-icons/md"
import Titulo from "../titulo"
import imgAntisoborno1 from "../../assets/antisoborno/antisoborno1.png"
import imgAntisoborno2 from "../../assets/antisoborno/antisoborno2.png"
import imgAntisoborno3 from "../../assets/antisoborno/antisoborno3.png"
import imgAntisoborno4 from "../../assets/antisoborno/antisoborno4.png"
import imgAntisoborno5 from "../../assets/antisoborno/antisoborno5.png"
import imgAntisoborno6 from "../../assets/antisoborno/antisoborno6.png"
import BeneficiosAntisoborno from "../beneficios/beneficiosAntisoborno"
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
const ImageContainer = styled.div`
  display:grid;
  width:100%;
  column-gap:60px;
  row-gap:20px;
  margin-top: 10px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media(max-width:990px){
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
  }
`

export default function AntisobornoMain(){
  const images = [imgAntisoborno1, imgAntisoborno2, imgAntisoborno3, imgAntisoborno4, imgAntisoborno5, imgAntisoborno6]
  const texts = [
    "Reduce el riesgo de sobornos, ayudando a llevar a cero los posibles casos de soborno en la organización",
    "Mejora la imagen de la empresa incorporando la ética e integridad a tu cultura organizacional.",
    "Genera confianza entre sus clientes y partes interesadas, ampliando sus oportunidades de negocio.",
    "Mejorar su calificación para acceder a homologaciones o licitaciones",
    "Establece una cultura que promueve la integridad, transparencia y el cumplimiento normativo.",
    "Integrable con otros sistemas ISO."
  ]
  return(
    <Wrapper>
      <Background>
        <p>La norma ISO 9001 es una normativa internacional de gestión de la calidad aplicable a cualquier tipo de organización de cualquier sector o actividad, y perfectamente integrable con las características propias de gestión de cualquier empresa existente dada su gran flexibilidad.</p>
        <p>Un Sistema de Gestión de Calidad basado en la norma ISO 9001:2015 demuestra a los clientes y al mercado que una organización desarrolla sus actividades con el objetivo de garantizar la satisfacción del cliente y el cumplimiento de sus requisitos (contractuales, legales, entre otros), basándose en la aplicación del ciclo de mejora continua y la gestión de sus procesos.</p>
      </Background>
      <Titulo titulo={"Beneficios de un sistema de gestión ISO 37001"}/>
      <ImageContainer>
        {
          images.map((image, i) =>{
            return <BeneficiosAntisoborno img={image} text={texts[i]}/>
          })
        }
      </ImageContainer>
      <Titulo titulo={"Nuestros Servicios"}/>
      <ul>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Consultoría para implementación ISO 37001</p></li>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Auditorías internas</p></li>
      </ul>
    </Wrapper>
  )
}