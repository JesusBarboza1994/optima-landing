import styled from "@emotion/styled"
import servicio1 from "../assets/servicios/servicios1.jpg"
import servicio2 from "../assets/servicios/servicios2.jpg"
import servicio3 from "../assets/servicios/servicios3.jpg"
import { colors } from "../styles/colors"
import Titulo from "./titulo"

const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  gap:20px;
  padding-bottom:80px;
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
`
const Img = styled.img`
  max-width:350px;
`

export default function Servicios(){
  return(
    <>
      <Titulo titulo={"Otros Servicios"}/>
      <Wrapper>

        <Card>
          <h2>Mantenimiento</h2>
          <Img src={servicio1} alt="imagen" />
        </Card>
        <Card>
          <h2>Capacitaciones</h2>
          <Img src={servicio2} alt="imagen" />
        </Card>
        <Card>
          <h2>Auditoría</h2>
          <Img src={servicio3} alt="imagen" />
        </Card>
      </Wrapper>
    </>
  )
}