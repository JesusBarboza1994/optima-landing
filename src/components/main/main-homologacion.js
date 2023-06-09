import styled from "@emotion/styled"
import homologacion from "../../assets/homologacion/homologacion.png"
import { colors } from "../../styles/colors"
import Titulo from "../titulo"
import imgHomologacion1 from "../../assets/homologacion/items/homologación1.png"
import imgHomologacion2 from "../../assets/homologacion/items/homologación2.png"
import imgHomologacion3 from "../../assets/homologacion/items/homologación3.png"
import imgHomologacion4 from "../../assets/homologacion/items/homologación4.png"
import imgHomologacion5 from "../../assets/homologacion/items/homologación5.png"
import imgHomologacion6 from "../../assets/homologacion/items/homologación6.png"
import imgHomologacion7 from "../../assets/homologacion/items/homologación7.png"
import BeneficiosHomologacion from "../beneficios/beneficiosHomologacion"
import NuestrosServicios from "../nuestros-servicios"
const Wrapper = styled.div`
  padding-bottom:50px;
  p{
    color:${colors.gray.light};
    line-height:150%;
  }
`
const ImageContainer = styled.div`
  display:grid;
  margin-top:30px;
  width:100%;
  column-gap:40px;
  row-gap:30px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media(max-width:990px){
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:30px;
    row-gap:0px;
  }
`
const Img = styled.img`
  padding: 40px 0px;
  margin:auto;
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

export default function HomologacionMain(){
  const images = [imgHomologacion1, imgHomologacion2, imgHomologacion3, imgHomologacion4, imgHomologacion5, imgHomologacion6, imgHomologacion7]
  const texts = [
    "donde se solicita organigrama, información sobre locales propios y/o alquilados, maquinarias y equipos, almacenes, existencias, equipamiento de cómputo, software, mantenimiento, etc.",
    "donde se solicita información del Sistema de Calidad de la empresa, procedimientos de control de calidad, manuales de calidad, instructivos, registros, etc.",
    "donde se revisan los acuerdos comerciales, licitaciones, clientes, procedimientos de postventa, reclamos y garantías, trazabilidad, políticas de precios, etc.",
    "donde se revisa todo lo referente a la contribución activa y voluntaria al mejoramiento social, económico y ambiental por parte de la empresa.",
    "donde se revisan aspectos relacionados a la gestión de medio ambiente, normas y procedimientos ambientales, manuales, registros, etc. según aspectos principales de la norma ISO 14001.",
    "en la cual se verifica la prevención de accidentes y enfermedades ocupacionales, procedimiento de trabajo seguro, manuales, matriz IPER y demás cumplimiento de acuerdo a la normativa vigente.",
    "donde se determina la información relevante sobre estados financieros, endeudamiento financiero, cuentas por cobrar y pagar, proveedores, clientes, contratos, sucursales, productos y servicios suministrados, etc.",
  ]
  const descriptions = [
    "Gestión Operativa",
    "Gestión de Calidad",
    "Gestión Comercial",
    "Responsabilidad Social",
    "Gestión Ambiental",
    "Seguridad y Salud",
    "Situación Financiera y Obligaciones Legales"
  ]
  const colors = ["#ed7d31", "#a5a5a5", "#ffc000", "#4472c4", "#70ad47", "#5b9bd5", "#ed7d31"]
  const list1 = ["Visita técnica a las instalaciones de la empresa.", "Desarrollo de toda la documentación exigida.", "Asesoría en la elaboración de los registros." ]
  const list2 = ["Capacitaciones al personal.", "Acompañamiento en la auditoría de homologación."]
  return(
    <Wrapper>
      <Background>
        <p style={{textAlign:"justify"}}>La homologación de proveedores es una metodología que emplean algunas organizaciones para verificar si sus proveedores de servicios o productos cumplen con una serie de estándares que garanticen un servicio óptimo.</p>
        <br/>
        <p style={{textAlign:"justify"}}>Los parámetros de homologación son definidos por la propia organización que es quien establece en base a qué variables quiere estandarizar la homologación.</p>
        <br/>
        <p style={{textAlign:"justify"}}>La aprobación es en base a un puntaje de cumplimiento de estos aspectos. Algunas empresas encargadas de llevar a cabo procesos de homologación son: BUREAU VERITAS PERÚ, SGS DEL PERU, ICONTEC, HODELPE, MEGA CERTIFICACIONES, entre otras.</p>
        <br/>
        <p>El final de dicho proceso la empresa encargada de efectuar la auditoría de homologación emite un certificado de homologación, cuyo puntaje está basado según los resultados obtenidos en la evaluación, y cuya vigencia en promedio es de 01 año.</p>
      </Background>
      <Titulo titulo={"¿Qué aspectos se evalúan en un proceso de homologación?"}/>
      <ImageContainer>
        {
          images.map((image, i) =>{
            return <BeneficiosHomologacion description={descriptions[i]} img={image} color={colors[i]} text={texts[i]}/>
          })
        }
      </ImageContainer>
      {/* <Img src={homologacion} alt="imagen"/> */}
     <Titulo titulo={"Nuestros Servicios"}/>
     <NuestrosServicios list1={list1} list2={list2}/>
    </Wrapper>
  )
}