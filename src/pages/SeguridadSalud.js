import SeguridadMain from "../components//main/main-seguridad";
import Banner from "../components/banner";
import Template from "../components/template-page";

export default function SeguridadSalud(){
  return(
    <>
      <Template title={"Norma ISO 45001"}
        subtitulo={"Sistema de Gestión de Seguridad y Salud en el Trabajo"}
        descrip={"Consultoría en Sistemas de Gestión de Seguridad y Salud en el Trabajo"}
        Main={SeguridadMain}
      />
      <Banner show={true} question={true}/>
    </>
  )
}