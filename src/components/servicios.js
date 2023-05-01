import styled from "@emotion/styled"
import servicio1 from "../assets/servicios/servicios1.jpg"
import servicio2 from "../assets/servicios/servicios2.jpg"
import servicio3 from "../assets/servicios/servicios3.jpg"
import { colors } from "../styles/colors"
import Titulo from "./titulo"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  gap:20px;
  padding-bottom:80px;
  h2{
    color:${colors.black};
  }
  @media(max-width:990px){
    flex-direction:column;
    align-items:center;
  }
`
const Card = styled.div`
  display:flex;
  flex-direction:column;
  h2{
    width:100%;
    background: ${colors.blue[100]};
    margin-bottom:0px;
    font-weight:400;
    font-size:22px;
    padding:10px 0px;
  }
  @media(max-width:990px){
    width:720px;
    align-items:center;
  }
  @media(max-width:768px){
    width:390px;
    align-items:center;
  }
  @media(max-width:480px){
    width:240px;
  }
`
const Img = styled.img`
  width:350px;
  @media(max-width:1200px){
    width:285px;
  }
  @media(max-width:990px){
    width:640px;
  } 
`
const Div = styled.div`
`
const LinkStyle = styled(Link)`
  text-decoration:none;
`

export default function Servicios(){
  return(
    <Div>
      <Titulo titulo={"Otros Servicios"}/>
      <Wrapper>
        <LinkStyle to={"1"}>
          <Card>
            <h2>Mantenimiento</h2>
            <Img src={servicio1} alt="imagen" />
          </Card>
        </LinkStyle>
        <LinkStyle to={"2"}>
          <Card>
            <h2>Capacitaciones</h2>
            <Img src={servicio2} alt="imagen" />
          </Card>
        </LinkStyle>
        <LinkStyle to={"3"}>
          <Card>
            <h2>Auditoría</h2>
            <Img src={servicio3} alt="imagen" />
          </Card>
        </LinkStyle>
      </Wrapper>
    </Div>
  )
}