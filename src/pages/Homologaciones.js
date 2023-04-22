import ConsultoriaMain from "../components/consultoria-main";
import HomologacionMain from "../components/homologacion-main";
import Template from "../components/template-page";

export default function Homologaciones(){
  return(
    <Template title={"Homologación de Proveedores"}
      descrip={"¿Qué es homologación de proveedores?"}
      Main={HomologacionMain}
    />
  )
}