import mainSeguridad from "../components/main/ main-segurida-salud"
import Template from "../components/template-page"

export default function SeguridadSaludLaboral(){
  return(
    <Template title={"Seguridad y Salud Laboral "}
      descrip={"Ley 29783, Ley de SST"}
      Main={mainSeguridad}
    />
  )
}