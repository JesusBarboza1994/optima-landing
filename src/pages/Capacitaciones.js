import CapacitacionesMain from "../components/main/main-capacitaciones";
import Template from "../components/template-page";

export default function Capacitaciones(){
  return(
    <Template
      title={"Capacitaciones Obligatorias de la Ley 29783 "}
      descrip={"Seguridad y Salud en el Trabajo"}
      Main={CapacitacionesMain}
    />
  )
}