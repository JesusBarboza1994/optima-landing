import MedioAmbienteMain from "../components/main/main-medio-ambiente";
import Template from "../components/template-page";

export default function MedioAmbiente(){
  return(
      <Template title={"Implementación de ISO 14001"}
        descrip={"Consultoría en Sistemas de Gestión Ambiental"}
        Main={MedioAmbienteMain}
        />
  )
}