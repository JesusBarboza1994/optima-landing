import AuditoriasMain from "../components/main/main-auditorias";
import Template from "../components/template-page";

export default function Auditorias(){
  return(
    <Template
      title={"Auditorías"}
      descrip={"Auditorias"}
      Main={AuditoriasMain}
    />
  )
}