import TemplateBlog from "../template-blog";
import MainArticulo5 from "./main/main-articulo5";

export default function Articulo5(){
  return(
    <TemplateBlog
      descrip={"¿Conoces la estructura de alto nivel (HLS) de los estándares ISO?"}
      Main={MainArticulo5}
    />
  )
}