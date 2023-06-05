import Banner from "../components/banner";
import HostigamientoMain from "../components/main/main-hostigamiento";
import Template from "../components/template-page";

export default function Hostigamiento(){
  return(
    <>
      <Template title={"Hostigamiento Sexual laboral"}
        descrip={"Implementación de la Ley de Prevención de Hostigamientos Sexual Laboral"}
        Main={HostigamientoMain}
      />
      <Banner show={true}/>
    </>
  )
}