import MedioAmbienteMain from "../components/main/main-medio-ambiente";
import Template from "../components/template-page";

export default function MedioAmbiente(){
  return(
      <Template title={"Medio Ambiente"}
        descrip={"Implementación de ISO 14001 - Consultoría en Sistemas de Gestión Ambiental"}
        Main={MedioAmbienteMain}
        />
  )
}