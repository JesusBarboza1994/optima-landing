import styled from "@emotion/styled"
import Titulo from "../titulo"
import { colors } from "../../styles/colors"
import ambiente1 from "../../assets/medioambiente/ambiente1.jpg"
import ambiente2 from "../../assets/medioambiente/ambiente2.png"
import ambiente3 from "../../assets/medioambiente/ambiente3.png"
import Servicios from "../servicios"
import imgAmbiente1 from "../../assets/medioambiente/items/ambiente1.png"
import imgAmbiente2 from "../../assets/medioambiente/items/ambiente2.png"
import imgAmbiente3 from "../../assets/medioambiente/items/ambiente3.png"
import imgAmbiente4 from "../../assets/medioambiente/items/ambiente4.png"
import imgAmbiente5 from "../../assets/medioambiente/items/ambiente5.png"
import imgAmbiente6 from "../../assets/medioambiente/items/ambiente6.png"
import imgAmbiente7 from "../../assets/medioambiente/items/ambiente7.png"
import imgAmbiente8 from "../../assets/medioambiente/items/ambiente8.png"
import BeneficiosAmbiente from "../beneficios/beneficiosAmbiente"
import { MdLabelImportant } from "react-icons/md"

const Wrapper = styled.div`

  h3{
    color: ${colors.blue[700]};
    font-weight:400;
    text-align:start;
    margin-bottom:10px;
    font-size:22px;
  }
  p{
    margin-top:0px;
    text-align:justify;
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
  @media(max-width:990px){
    li{
      align-items:flex-start;
    }
  }
`
const Img1 = styled.img`
  width: 640px;
  padding: 20px 0px;
  margin:auto;
`
const Img2 = styled.img`
  width: 820px;
  margin:auto;
`
const Img3 = styled.img`
  width: 1140px;
  padding: 10px 0px;
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
    max-width:555px;
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
const ImageContainer = styled.div`
  display:grid;
  width:100%;
  column-gap:60px;
  row-gap:20px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media(max-width:990px){
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
  }
`

export default function MedioAmbienteMain(){
  const images = [imgAmbiente1, imgAmbiente2, imgAmbiente3, imgAmbiente4, imgAmbiente5, imgAmbiente6, imgAmbiente7, imgAmbiente8]
  const texts = [
    "Reduce la posibilidad que la organización reciba sanciones por incumplimiento legal en materia medio ambiental.",
    "Posibilidad de acceder a mercados internacionales con requisitos y necesidades más exigentes en materia medioambiental.",
    "Mejora el control de gastos a través de la reducción de residuos y la optimización de consumos de energía, agua, etc.",
    "Mejora la imagen de la empresa comunicando su compromiso con el medio ambiente.",
    "Proporciona una ventaja competitiva a la organización.",
    "Mejorar su calificación para acceder a homologaciones o licitaciones.",
    "Posibilidad de acceder a subvenciones ambientales y concursos públicos.",
    "Integrable con otros sistemas ISO."
  ]
  return(
    <Wrapper>
      <Div1>
        <div>  
        <p>Las empresas que implantan la norma ISO 14001 están demostrando que llevan a cabo su actividad conforme a los estándares que dicta esta norma en materia medioambiental, promoviendo la protección ambiental y la prevención de la contaminación que se pudiera generar.</p>
        <br/>
        <p>La sociedad actual posee una alta sensibilidad a los temas ambientales. Los clientes concienciados con el medio ambiente prefieren hacer negocios con empresas que comparten la misma idea. Implantar un Sistema de Gestión Ambiental es el primer paso para satisfacer las demandas de la sociedad.</p>
        </div>
        <img src={ambiente1} alt="imagen" style={{width:"100%"}}/>
      </Div1>
      <Titulo titulo={"Beneficios de un sistema de gestión ISO 14001"}/>
      <ImageContainer>
        {
          images.map((image, i) =>{
            return <BeneficiosAmbiente img={image} text={texts[i]}/>
          })
        }
      </ImageContainer>
      {/* <Img3 src={ambiente3}/> */}
      {/* <Titulo titulo={"¿Cómo puedo implantar ISO-14001 en mi organización?"}/>
      <p>El proceso de implantación de un Sistema de Gestión basado en la norma ISO-14001 consta de varios pasos:</p>
      <Img2 src={ambiente2}/> */}
      <Titulo titulo={"Nuestros Servicios"}/>
      <ul>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Consultoría para implementación ISO 14001:2015</p></li>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Mantenimiento y mejora de sistema de gestión medio ambiental</p></li>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Auditorías internas.</p></li>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Elaboración, revisión y actualización de matriz de identificación de aspectos e impactos ambientales</p></li>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Levantamiento y actualización de matriz legal medio ambiental.</p></li>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Capacitaciones inhouse de interpretación de requisitos ISO 14001:2015</p></li>
        <li><span><MdLabelImportant style={{width:"16px", height:"16px"}}/></span><p>Capacitación inhouse de auditor interno ISO 14001</p></li>
      </ul>
    </Wrapper>
    )
}