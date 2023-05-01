import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { BsCheck } from "react-icons/bs"
import servicio1 from "../../assets/servicios/servicios1.jpg"
const Wrapper = styled.div`
  display:flex;
  text-align:start;
  max-width:1170px;
  margin-bottom:20px;
  gap:20px;
  h2{
    color:${colors.blue[700]};
    font-weight:300;
    width:100%;
  }
  p{
    text-align:justify;
  }
  h3{
    text-align:start;
    width:100%;
    color:${colors.black};
    font-size: 22px;
    font-weight:400;
  }
  ul{
    list-style:none;
    padding-left:0;
  }
  li{
    color:${colors.gray.light};
    line-height:200%;
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
    margin-bottom:16px;
  }
  @media(max-width:480px){
    max-width:100%;
    margin-bottom:12px;
  }
`
const Img = styled.img`
  max-width:555px;
  @media(max-width:1200px){
    max-width:455px;
  }
  @media(max-width:500px){
    width:100%;
  }
`
export default function Medio1(){
  return(
    <Wrapper>
      <div>
        <p>El servicio de mantenimiento de sistemas de gestión le permitirá́ centrar sus actividades en las áreas de negocio clave de su empresa, reduciendo costos y así́, optimizar recursos humanos, materiales y económicos.</p>
        <br/>
        <p>Con el servicio de MANTENIMIENTO de sistemas de gestión de OPTIMA CONSULTORA contará́ con un conjunto multidisciplinario de especialistas que le garantizará, además del mantenimiento del sistema de gestión, la mejora y optimización del mismo por medio de la actualización de los procesos a las nuevas tendencias y requisitos de aplicación.</p>
      </div>
      <Img src={servicio1} alt="imagen"/>
    </Wrapper>
  )
}