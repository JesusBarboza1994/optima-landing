import SeguridadMain from "../components//main/main-seguridad";
import Template from "../components/template-page";

export default function SeguridadSalud(){
  return(
    <Template title={"Implementación de ISO 45001"}
      descrip={"Consultoría en Sistemas de Gestión de Seguridad y Salud en el Trabajo"}
      Main={SeguridadMain}
    />
  )
}