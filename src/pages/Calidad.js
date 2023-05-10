import CalidadMain from "../components/main/main-calidad";
import Template from "../components/template-page";

export default function Calidad(){
  return(
    <Template title={"Calidad"}
      descrip={"Implementación de ISO 9001 - Consultoría en Sistemas de Gestión de Calidad"}
      Main={CalidadMain}
    />
  )
}