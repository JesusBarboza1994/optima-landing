import AntisobornoMain from "../components/main/main-antisoborno";
import Template from "../components/template-page";

export default function Antisoborno(){
  return(
    <Template
      title={"Norma ISO 37001"}
      subtitulo={"Sistema de Gestión Antisoborno"}
      descrip={"Consultoría en Sistemas de Gestión Antisoborno"}
      Main={AntisobornoMain}
    />
  )
}