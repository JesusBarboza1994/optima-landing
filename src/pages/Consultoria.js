import styled from "@emotion/styled";
import ConsultoriaMain from "../components/main/main-consultoria";
import Template from "../components/template-page";



export default function Consultoria(){
  return(
    <>
      <Template title={"Consultoría Organizacional"} 
        descrip={"Nos adaptamos a la realidad de su empresa"}
        Main={ConsultoriaMain}
      />

    </>
  )
}