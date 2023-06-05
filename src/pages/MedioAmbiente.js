import Banner from "../components/banner";
import MedioAmbienteMain from "../components/main/main-medio-ambiente";
import Template from "../components/template-page";

export default function MedioAmbiente(){
  return(
      <>
        <Template title={"Norma ISO 14001"}
          subtitulo={"Sistema de Gestión Ambiental"}
          descrip={"Consultoría en Sistemas de Gestión Ambiental"}
          Main={MedioAmbienteMain}
        />
        <Banner show={true} question={true}/>
      </>
  )
}