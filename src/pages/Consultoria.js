import ConsultoriaMain from "../components/consultoria-main";
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