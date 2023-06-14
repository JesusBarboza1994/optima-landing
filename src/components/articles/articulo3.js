import TemplateBlog from "../template-blog";
import MainArticulo3 from "./main/main-articulo3";

export default function Articulo3(){
  return(
    <TemplateBlog
      descrip={"¿Cómo implemento ISO-45001 en mi organización?"}
      Main={MainArticulo3}
    />
  )
}