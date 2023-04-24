import SeguridadMain from "../components//main/main-seguridad";
import Template from "../components/template-page";

export default function SeguridadSalud(){
  return(
    <Template title={"Seguridad y Salud"}
      descrip={"Seguridad Y Salud"}
      Main={SeguridadMain}
    />
  )
}