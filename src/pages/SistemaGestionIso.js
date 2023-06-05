import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Servicios from "../components/servicios";
import Template from "../components/template-page";
import Banner from "../components/banner";

const Wrapper = styled.div`
`

export default function SistemaGestionIso(){
  return(
    <Wrapper>
      <Template
        title={"Sistemas de Gestión"}
        descrip={"Lo que ofrecemos"}
        Main={Servicios}
      />
      <Banner show={true} question={true}/>
    </Wrapper>
  )
}