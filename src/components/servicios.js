import styled from "@emotion/styled"
// import servicio1 from "../assets/servicios/servicios1.jpg"
// import servicio2 from "../assets/servicios/servicios2.jpg"
// import servicio3 from "../assets/servicios/servicios3.jpg"
import iso9001 from "../assets/sistemaGestion/9001.jpg"
import iso14001 from "../assets/sistemaGestion/14001.jpg"
import iso45001 from "../assets/sistemaGestion/45001.jpg"
import iso37001 from "../assets/sistemaGestion/37001.jpg"
import { colors } from "../styles/colors"
import Titulo from "./titulo"
import { Link } from "react-router-dom"
import CardHome from "./card-home"

const Wrapper = styled.div`
  p{
    margin-bottom:16px;
    text-align:center;
  }
  h2{
    color:${colors.black};
  }
  
`
const Container = styled.div`
  display:grid;
  grid-template-rows:1fr 1fr;
  grid-template-columns:1fr 1fr;
  justify-content: center;
  gap:40px;
  margin-top:40px;
  padding-bottom:80px;
  @media(max-width:920px){
    grid-template-rows:1fr 1fr 1fr 1fr;
    grid-template-columns:1fr;
  }
`
const Card = styled.div`
  display:flex;
  flex-direction:column;
  width:420px;
  h2{
    width:100%;
    margin-bottom:0px;
    font-weight:400;
    font-size:22px;
    padding:10px 0px;
  }
  div{
    height:120px;
    background: ${colors.blue[100]};
    padding: 10px 15px;
  }
  @media(max-width:480px){
    width:300px;
    h2{
      font-size:18px;
    }
  }
`
const Img = styled.img`
  width:100%;
  height:220px;
  // @media(max-width:1200px){
  //   width:350px;
  // }
  // @media(max-width:990px){
  //   width:640px;
  // }
  @media(max-width:480px){
    height:200px;
  }
`
const Div = styled.div`
`
const LinkStyle = styled(Link)`
  text-decoration:none;
  display:flex;
  justify-content:center;
`

export default function Servicios(){
  return(
    <Div>
      {/* <Titulo titulo={"Nuestros Servicios"}/> */}
      <Wrapper>
        <p>Contamos con experiencia en la implementación, mantenimiento y mejora de sistemas de gestión. Con ello te ayudamos a ser más competitivo.</p>
        <Container>
          <LinkStyle to={"/calidad"}>
            <Card>
              <div>
                <h2>ISO 9001</h2>
                <h2>Sistema de Gestión de la Calidad</h2>
              </div>
              <Img src={iso9001} alt="imagen" />
            </Card>
          </LinkStyle>
          <LinkStyle to={"/seguridad-y-salud"}>
            <Card>
              <div>
                <h2>ISO 45001</h2>
                <h2>Sistema de Gestión de Seguridad y Salud en el Trabajo</h2>
              </div>
              <Img src={iso45001} alt="imagen" />
            </Card>
          </LinkStyle>
          <LinkStyle to={"/medio-ambiente"}>
            <Card>
              <div>
                <h2>ISO 14001</h2>
                <h2>Sistema de Gestión Ambiental</h2>
              </div>
              <Img src={iso14001} alt="imagen" />
            </Card>
          </LinkStyle>
          <LinkStyle to={"/anti-soborno"}>
            <Card>
              <div>
                <h2>ISO 37001</h2>
                <h2>Sistema de Gestión Antisoborno</h2>
              </div>
              <Img src={iso37001} alt="imagen" />
            </Card>
          </LinkStyle>
        </Container>
      </Wrapper>
    </Div>
  )
}