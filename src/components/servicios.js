import styled from "@emotion/styled"
import servicio1 from "../assets/servicios/servicios1.jpg"
import servicio2 from "../assets/servicios/servicios2.jpg"
import servicio3 from "../assets/servicios/servicios3.jpg"
import { colors } from "../styles/colors"
import Titulo from "./titulo"

const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
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
export default function Servicios(){
  return(
    <>
      <Titulo titulo={"Otros Servicios"}/>
      <Wrapper>

        <Card>
          <h2>Mantenimiento</h2>
          <img src={servicio1} alt="imagen" style={{width:"350px"}}/>
        </Card>
        <Card>
          <h2>Capacitaciones</h2>
          <img src={servicio2} alt="imagen" style={{width:"350px"}}/>
        </Card>
        <Card>
          <h2>Auditoría</h2>
          <img src={servicio3} alt="imagen" style={{width:"350px"}}/>
        </Card>
      </Wrapper>
    </>
  )
}