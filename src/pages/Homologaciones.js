import Banner from "../components/banner";
import HomologacionMain from "../components/main/main-homologacion";
import Template from "../components/template-page";

export default function Homologaciones(){
  return(
    <>
      <Template title={"Homologación de Proveedores"}
        descrip={"¿En qué consiste una homologación de proveedores?"}
        Main={HomologacionMain}
      />
      <Banner show={true}/>
    </>
  )
}