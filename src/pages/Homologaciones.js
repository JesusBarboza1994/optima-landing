import HomologacionMain from "../components/main/main-homologacion";
import Template from "../components/template-page";

export default function Homologaciones(){
  return(
    <Template title={"Homologación de Proveedores"}
      descrip={"¿Qué es homologación de proveedores?"}
      Main={HomologacionMain}
    />
  )
}