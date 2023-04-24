import styled from "@emotion/styled"
import { FaCheck } from "react-icons/fa"
import consultoria1 from "../../assets/consultoria/consultoria1.jpg"
import consultoria2 from "../../assets/consultoria/consultoria2.jpg"

const Wrapper = styled.div`
  ul{
    list-style:none;
    display:flex;

    flex-direction:column;
    justify-content:space-between;
  }
  li{
    text-align:start;

  }
`
const CheckDiv = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-bottom:40px;
`
const Check = styled(FaCheck)`
  padding-right:4px;
`
const Img1 = styled.img`
  max-width:555px;
`
const Img2 = styled.img`
  max-width:900px;
  margin-bottom:20px;
`
export default function ConsultoriaMain(){
  return(
    <Wrapper>
      <p>Toda empresa atraviesa diferentes etapas a lo largo de su ciclo de vida. Etapas en las que las necesidades de la empresa van cambiando y la aplicación de medidas concretas y toma de decisiones se vuelven fundamentales para su futuro.</p>
      <br/>
      <p>En ÓPTIMA CONSULTORA trabajamos estrechamente con nuestros clientes para adecuar los procesos y estructura organizativa de manera que apoyen efectivamente en la implementación de la estrategia.</p>
      <div>
        <CheckDiv>
          <ul>
            <li><Check /> Diseño, mejora o rediseño de procesos y procedimientos.</li>
            <li><Check/> Elaboración de manual de Gestión de Procesos y Procedimientos.</li>
            <li><Check/> Elaboración de mapas de procesos.</li>
            <li><Check/> Caracterización de procesos.</li>
            <li><Check/> Rediseño de estructuras organizativas.</li>
            <li><Check/> Diseño perfiles de puestos.</li>
            <li><Check/> Elaboración de Manual de Organización y Funciones - MOF.</li>
            <li><Check/> Evaluación de desempeño del personal.</li>
            <li><Check/> Evaluación de clima organizacional.</li>
          </ul>
          <Img1 src={consultoria1} alt="imagen"/>
        </CheckDiv>
        <Img2 src={consultoria2} alt="imagen"/>
      </div>
    </Wrapper>
  )
}