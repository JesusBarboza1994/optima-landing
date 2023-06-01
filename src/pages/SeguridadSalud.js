import SeguridadMain from "../components//main/main-seguridad";
import Template from "../components/template-page";

export default function SeguridadSalud(){
  return(
    <Template title={"Norma ISO 45001"}
      subtitulo={"Sistema de gestión de Seguridad y Salud en el trabajo"}
      descrip={"Consultoría en Sistemas de Gestión de Seguridad y Salud en el Trabajo"}
      Main={SeguridadMain}
    />
  )
}