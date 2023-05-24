import TemplateBlog from "../template-blog";
import MainArticulo1 from "./main/main-articulo1";

export default function Articulo1(){
  return(
    <TemplateBlog
      descrip={"Registros de Seguridad y Salud Laboral para MYPES"}
      Main={MainArticulo1}
    />
  )
}