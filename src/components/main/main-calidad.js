import styled from "@emotion/styled"
import calidad1 from "../../assets/calidad/calidad1.jpg"
import calidad2 from "../../assets/calidad/calidad2.jpg"
import calidad3 from "../../assets/calidad/calidad3.jpg"
import Servicios from "../servicios"
import Titulo from "../titulo"
import { colors } from "../../styles/colors"
import BeneficiosIso from "../beneficiosISO"
import iconoAmarillo from "../../assets/calidad/calidad-icono-amarillo.png"
import iconoAqua from "../../assets/calidad/calidad-icono-aqua.png"
import iconoAzul from "../../assets/calidad/calidad-icono-azul.png"
import iconoAzver from "../../assets/calidad/calidad-icono-azver.png"
import iconoNaranja from "../../assets/calidad/calidad-icono-naranja.png"
import iconoRojo from "../../assets/calidad/calidad-icono-rojo.png"
import iconoVerde from "../../assets/calidad/calidad-icono-verde.png"

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
`
const ImageContainer = styled.div`
  display:grid;
  width:100%;
  column-gap:40px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media(max-width:990px){
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:30px;
  }

`

export default function CalidadMain(){
  return(
    <Wrapper>
      <h3>ISO 9001 Sistema de Gestión de Calidad.</h3>
      <p>La norma ISO 9001 es una normativa internacional de gestión de la calidad aplicable a cualquier tipo de organización de cualquier sector o actividad, y perfectamente integrable con las características propias de gestión de cualquier empresa existente dada su gran flexibilidad.</p>
      <p>Un Sistema de Gestión de Calidad basado en la norma ISO 9001:2015 demuestra a los clientes y al mercado que una organización desarrolla sus actividades con el objetivo de garantizar la satisfacción del cliente y el cumplimiento de sus requisitos (contractuales, legales, entre otros), basándose en la aplicación del ciclo de mejora continua y la gestión de sus procesos.</p>
      {/* <p>La norma ISO 9001 está basada en ocho principios de gestión de calidad:</p> */}
      {/* <img src={calidad1} alt="imagen" style={{marginBottom:"60px"}}/> */}
      <Titulo titulo={"Beneficios de un Sistema de Gestión de Calidad ISO 9001"}/>
      {/* <img src={calidad2} alt="imagen" style={{marginBottom:"60px"}}/> */}
      <ImageContainer>
        <BeneficiosIso description="Aumento de la rentabilidad:" img={iconoNaranja} color={"#ed7d31"} text={"Optimiza y mejora la ejecución y control de los procesos e identifica y gestiona los riesgos y oportunidades. Todo ello con orientación a la satisfacción del cliente y al cumplimiento de requisitos."}/>
        <BeneficiosIso description="Reducción de costos:" img={iconoAzul} color={"#5b9bd5"} text={"Orientada a garantizar la eficacia y mejorar la eficiencia de las actividades operativas. Gestiona el conocimiento de la organización y reduce los costos de no calidad (costes derivados del incumplimiento de requisitos, fallos, etc.)."}/>
        <BeneficiosIso description="Aumento de satisfacción de clientes y otras partes interesadas:" img={iconoVerde} color={"#81dc64"} text={"Permite conocer las necesidades y expectativas del cliente y otras partes interesadas para establecer acciones destinadas a garantizar y mejorar la satisfacción de las mismas a través de adecuados canales de comunicación."}/>
        <BeneficiosIso description="Reducción de riesgos de negocio:" img={iconoAmarillo} color={"#ffc000"} text={"Permite identificar, analizar y gestionar los riesgos y oportunidades del negocio en cada proceso de trabajo, estableciendo acciones para su tratamiento y evaluando la eficacia de las mismas."}/>
        <BeneficiosIso description="Licitaciones y barreras comerciales:" img={iconoAqua} color={"#25c8b4"} text={"Disponer de un sistema de calidad ISO 9001 permite ampliar la cartera de clientes, fidelizarlos y la generar de nuevos nichos de mercado."}/>
        <BeneficiosIso description="Diferenciación positiva:" img={iconoRojo} color={"#f94151"} text={"Ofrece mayores garantías en el desarrollo, control y mejora de las actividades, el cumplimiento de los requisitos y la gestión y control de los riesgos derivados de las mismas."}/>
        <BeneficiosIso description="Integrable con otros sistemas:" img={iconoAzver} color={"#136773"} text={"Su estructura y requisitos siguiendo la “Estructura de Alto Nivel – Anexo SL” permite y facilita la integración y optimización con otros sistemas de gestión (ISO 14001, ISO 45001, ISO 50001, etc.)"}/>
      </ImageContainer>
      <Titulo titulo={"¿Cómo implemento ISO-9001 en mi organización?"}/>
      <p>Para llevar a cabo la implementación de un Sistema de Gestión de la Calidad en su organización, y poder optar a certificarse en ISO-9001, deberá seguir una serie de pasos:</p>
      <img src={calidad3} alt="imagen"/>
      <Servicios />
    </Wrapper>
  )
}