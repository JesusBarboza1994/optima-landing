import Banner from "../components/banner";
import CapacitacionesMain from "../components/main/main-capacitaciones";
import Template from "../components/template-page";

export default function Capacitaciones(){
  return(
    <>
      <Template
        title={"Capacitaciones"}
        descrip={"Según Ley 29783 "}
        Main={CapacitacionesMain}
        tit={true}
      />
      <Banner show={true}/>
    </>
  )
}