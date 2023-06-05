import styled from "@emotion/styled";
import ConsultoriaMain from "../components/main/main-consultoria";
import Template from "../components/template-page";
import Banner from "../components/banner";



export default function Consultoria(){
  return(
    <>
      <Template title={"Consultoría Organizacional"} 
        descrip={"Nos adaptamos a la realidad de su empresa"}
        Main={ConsultoriaMain}
      />
      <Banner show={true}/>
    </>
  )
}