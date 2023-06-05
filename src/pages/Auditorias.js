import Banner from "../components/banner";
import AuditoriasMain from "../components/main/main-auditorias";
import Template from "../components/template-page";

export default function Auditorias(){
  return(
    <>
      <Template
        title={"Auditorías"}
        descrip={"Auditorias"}
        Main={AuditoriasMain}
        tit={true}
      />
      <Banner show={true}/>
    </>
  )
}