import CalidadMain from "../components/main/main-calidad";
import Template from "../components/template-page";

export default function Calidad(){
  return(
    <Template title={"Norma ISO 9001"}
      subtitulo={"Sistema de Gestión de la Calidad"}
      descrip={"Consultoría en Sistemas de Gestión de la Calidad"}
      Main={CalidadMain}
    />
  )
}