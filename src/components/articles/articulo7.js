import TemplateBlog from "../template-blog";
import MainArticulo7 from "./main/main-articulo7";

export default function Articulo7(){
  return(
    <TemplateBlog
      descrip={"¿Cómo implemento ISO-9001 en mi organización?"}
      Main={MainArticulo7}
    />
  )
}