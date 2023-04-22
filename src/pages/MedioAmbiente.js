import MedioAmbienteMain from "../components/medio-ambiente-main";
import Template from "../components/template-page";

export default function MedioAmbiente(){
  return(
    <>
      <Template title={"Medio Ambiente"}
        descrip={"Medio Ambiente"}
        Main={MedioAmbienteMain}
        />
    </>
  )
}