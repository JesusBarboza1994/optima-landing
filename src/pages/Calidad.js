import CalidadMain from "../components/main/main-calidad";
import Template from "../components/template-page";

export default function Calidad(){
  return(
    <Template title={"Implementación de ISO 9001"}
      descrip={"Consultoría en Sistemas de Gestión de la Calidad"}
      Main={CalidadMain}
    />
  )
}