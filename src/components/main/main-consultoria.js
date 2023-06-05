import styled from "@emotion/styled"
import { FaCheck } from "react-icons/fa"
import consultoria1 from "../../assets/consultoria/consultoria1.jpg"
import consultoria2 from "../../assets/consultoria/consultoria2.jpg"
import { colors } from "../../styles/colors"
import NuestrosServicios from "../nuestros-servicios"
import Titulo from "../titulo"

const Wrapper = styled.div`
  color:${colors.gray.light};
  display:flex;
  flex-direction:column;
  ul{
    list-style:none;
    display:flex;

    flex-direction:column;
    justify-content:space-between;
  }
  li{
    text-align:start;
    line-height:200%;
  }
  p{
    width:100%;
  }
  
`
const CheckDiv = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-bottom:40px;
  ul{
    margin:0px;
    padding-left:0px;
  }
`
const Check = styled(FaCheck)`
  padding-right:4px;
`
const Img1 = styled.img`
  max-width:555px;
  padding-top:10px;
  @media(max-width:1000px){
    width:100%;
    margin:auto;
  }
`
const Div2 = styled.div`
  display:flex;
  width:100%;
  gap:50px;
  align-items:center;
  justify-content: center;
  img{
    max-width:400px;
    border-radius:12px;
  }
  div{
    font-size:18px;
    color:${colors.gray.light};
    padding-right:20px;
  }
  p{
    text-align:justify;
  }

  @media(max-width:1200px){
    flex-direction:column;
    gap:0;
    div{
      padding-top:12px;
    }
    img{
      margin-top:16px;
    }
  }
  @media(max-width:475px){
    img{
      max-width:300px;
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
export default function ConsultoriaMain(){
  const list1 = [
    "Diseño, mejora o rediseño de procesos y procedimientos.",
    "Elaboración de manual de Gestión de Procesos y Procedimientos.",
    "Elaboración de mapas de procesos.",
    "Caracterización de procesos.",
    "Rediseño de estructuras organizativas.",
  ]
  const list2 = [
    "Diseño perfiles de puestos.",
    "Elaboración de Manual de Organización y Funciones - MOF.",
    "Evaluación de desempeño del personal.",
    "Evaluación de clima organizacional.",
  ]

  return(
    <Wrapper>
      <Div2>
        <Background>
          <p>Toda empresa atraviesa diferentes etapas a lo largo de su ciclo de vida. Etapas en las que las necesidades de la empresa van cambiando y la aplicación de medidas concretas y toma de decisiones se vuelven fundamentales para su futuro.</p>
          <br/>
          <p>En ÓPTIMA CONSULTORA trabajamos estrechamente con nuestros clientes para adecuar los procesos y estructura organizativa de manera que apoyen efectivamente en la implementación de la estrategia.</p>
          </Background>
          <img src={consultoria1} alt="imagen"/>
      </Div2>
        {/* <div style={{display:"flex", justifyContent:"center"}}>
          <Img2 src={consultoria2} alt="imagen"/>
        </div> */}
      <Titulo titulo={"Nuestros Servicios"}/>
      <NuestrosServicios list1={list1} list2={list2}/>
    </Wrapper>
  )
}