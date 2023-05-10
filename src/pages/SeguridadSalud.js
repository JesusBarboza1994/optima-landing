import SeguridadMain from "../components//main/main-seguridad";
import Template from "../components/template-page";

export default function SeguridadSalud(){
  return(
    <Template title={"Seguridad y Salud"}
      descrip={"Implementación de ISO 45001 - Consultoría en Sistemas de Gestión de Seguridad y Salud en el Trabajo"}
      Main={SeguridadMain}
    />
  )
}