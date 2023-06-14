import styled from "@emotion/styled"
import seguridad1 from "../../assets/seguridad/seguridad1.jpg"
import seguridad2 from "../../assets/seguridad/seguridad2.png"
import seguridad3 from "../../assets/seguridad/seguridad3.png"
import seguridad4 from "../../assets/seguridad/seguridad4.jpg"
import { colors } from "../../styles/colors"
import Titulo from "../titulo"
import Servicios from "../servicios"
import imgSeguridad1 from "../../assets/seguridad/items/seguridad1.png"
import imgSeguridad2 from "../../assets/seguridad/items/seguridad2.png"
import imgSeguridad3 from "../../assets/seguridad/items/seguridad3.png"
import imgSeguridad4 from "../../assets/seguridad/items/seguridad4.png"
import imgSeguridad5 from "../../assets/seguridad/items/seguridad5.png"
import imgSeguridad6 from "../../assets/seguridad/items/seguridad6.png"
import imgSeguridad7 from "../../assets/seguridad/items/seguridad7.png"
import imgSeguridad8 from "../../assets/seguridad/items/seguridad8.png"
import imgSeguridad9 from "../../assets/seguridad/items/seguridad9.png"
import imgSeguridad10 from "../../assets/seguridad/items/seguridad10.png"
import imgSeguridad11 from "../../assets/seguridad/items/seguridad11.png"
import imgSeguridad12 from "../../assets/seguridad/items/seguridad12.png"
import imgSeguridad13 from "../../assets/seguridad/items/seguridad13.png"
import BeneficiosSeguridad from "../beneficios/beneficiosSeguridad"
import { MdLabelImportant } from "react-icons/md"
import NuestrosServicios from "../nuestros-servicios"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  img{
    padding: auto 20px;
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
const Div1 = styled.div`
  display:flex;
  justify-content:center;
  gap:60px;
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
    max-width:450px;
    border-radius:8px;
    border-shadow:0px 4px 4px rgba(0, 0, 0, 0.7);
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
  @media(max-width:500px){
    img{
      max-width:350px;
    }
  }
`
const SubTitle = styled.h2`
  font-size:22px;
  color:${colors.blue[500]};
  font-weight:400;
  margin-top:40px;
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
const Div2 = styled.div`
  display:flex;
  width:100%;
  gap:50px;
  align-items:center;
  justify-content: center;
  img{
    padding: 20px 0 10px 0;
    max-width:500px;
  }
  div{
    font-size:18px;
    color:${colors.gray.light};
    padding-right:20px;
  }
  p{
    text-align:justify;
  }
  margin-bottom:60px;
  @media(max-width:1200px){
    img{
      max-width:455px;
    }
  }
  @media(max-width:990px){
    flex-direction:column;
    gap:0;
    div{
      padding-top:12px;
    }
  @media(max-width:550px){
    img{
      max-width:300px;
    }
  }
  }
`

export default function SeguridadMain(){
  const images = [imgSeguridad1, imgSeguridad2, imgSeguridad3, imgSeguridad4, imgSeguridad5, imgSeguridad6, imgSeguridad7, imgSeguridad8, imgSeguridad9, imgSeguridad10, imgSeguridad11, imgSeguridad12, imgSeguridad13]
  const texts = [
    "Reduce el índice de siniestralidad de la organización.",
    "Mejora el clima laboral con la consulta y participación de trabajadores.",
    "Previene lesiones y el deterioro de la salud.",
    "Disminuye el absentismo laboral.",
    "Provee condiciones de trabajo más seguras, lo que genera mayor productividad.",
    "Mejora de la imagen de la empresa de cara a accionistas e inversores.",
    "Fomenta la cultura preventiva en la empresa.",
    "Mejora de la imagen pública de la empresa.",
    "Facilita el cumplimiento de la legislación aplicable.",
    "Proporciona un valor añadido a la empresa, diferenciándola respecto a la competencia.",
    "Implanta la capacidad de identificar, evaluar y controlar los riesgos asociados a cada puesto de trabajo.",
    "Integrable con otros sistemas ISO.",
    "Mejora su reputación en relación con la gestión de la Seguridad y Salud en el trabajo."
  ]
  const list1 = [
    "Consultoría para implementación ISO 45001:2018.",
    "Consultoría para implementación de Ley 29783 Ley de seguridad y salud en el trabajo.",
    "Mantenimiento y mejora de sistema de gestión de SST.",
    "Auditorías internas ISO 45001.",
  ]
  const list2 = [
    "Auditorías según Ley 29783 (auditor acreditado por MINTRA).",
    "Elaboración, revisión y actualización de matriz IPERC.",
    "Capacitaciones inhouse de Seguridad y Salud Laboral."
  ]
  return(
    <Wrapper>
      <Div1>
        <div>  
          <p>La norma ISO 45001 está enfocada a la Seguridad y Salud en el trabajo, persiguiendo la mejora continua por parte de la organización, dado que este es uno de los elementos básicos de la gestión empresarial.</p>
          <br/>
          <p>En el contexto actual se hace necesario contar con un elemento objetivo para comunicar a empleados, clientes, accionistas y otras partes interesadas no sólo el compromiso de la organización con la seguridad y salud de sus empleados sino también que la política de seguridad y salud en el trabajo se está aplicando adecuadamente, con una voluntad de mejora continua.</p>
        </div>
        <img src={seguridad1} alt="imagen"/>
      </Div1>
      <Titulo titulo={"Beneficios de un sistema de gestión ISO 45001"}/>
      <ImageContainer>
        {
          images.map((image, i) =>{
            return <BeneficiosSeguridad img={image} text={texts[i]}/>
          })
        }
      </ImageContainer>
      
      {/* <img src={seguridad2} alt="imagen" style={{width:"100%"}}/> */}
      {/* <Titulo titulo={"¿Cómo implemento ISO-45001 en mi organización?"}/>
      <p>Para llevar a cabo la implementación de un Sistema de Gestión de la Seguridad y Salud en su organización, y poder certificarse en ISO-45001, deberá seguir una serie de pasos:</p>
      <img src={seguridad3} alt="imagen" style={{width:"100%", paddingTop:"40px"}}/> */}
      {/* <SubTitle>Implementación Ley 29783 - Ley de Seguridad y Salud en el Trabajo</SubTitle>
      <Div2>
        <img src={seguridad4} alt="imagen"/>
        <div>
          <p>La Ley 29783 tiene como objetivo promover una cultura de prevención de riesgos en los centros laborales. Se puede aplicar a cualquier empresa, ya sea pública o privada de todos los sectores económicos.</p>
          <p>A partir de esta ley se estableció la obligación de contar con un Sistema de Gestión en Seguridad y Salud en el trabajo.</p>
          <p>En ÓPTIMA CONSULTORA nos aseguramos de que cumplas con todos los requisitos previstos en la Ley 29783, su reglamento y modificatorias, de esta forma se previenen las sanciones por incumplimiento impuestas por la SUNAFIL.</p>
          <p>Este sistema permite a las organizaciones a contar con un lugar de trabajo seguro y saludable para sus colaboradores y partes interesadas, contribuyendo en la prevención de lesiones y problemas de salud ocupacional y bajo el enfoque de mejora de manera continua en el desempeño de su sistema de gestión.</p>
        </div>
      </Div2> */}
      {/* <Servicios/> */}
      <Titulo titulo={"Nuestros Servicios"}/>
      <NuestrosServicios list1={list1} list2={list2}/>
    </Wrapper>
  )
}