import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
`

export default function SistemaGestionIso(){
  return(
    <Wrapper>
      <Link to={"/calidad"}>Calidad</Link>
      <Link to={"/seguridad-y-salud"}>SST</Link>
      <Link to={"/medio-ambiente"}>Medio Ambiente</Link>
    </Wrapper>
  )
}