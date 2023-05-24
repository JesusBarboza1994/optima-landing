import AntisobornoMain from "../components/main/main-antisoborno";
import Template from "../components/template-page";

export default function Antisoborno(){
  return(
    <Template
      title={"Implementación de ISO 37001"}
      descrip={"Consultoría en Sistemas de Gestión Antisoborno"}
      Main={AntisobornoMain}
    />
  )
}