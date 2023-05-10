import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  width: 360px;
  color: ${colors.gray.light};
  display:flex;
  flex-direction:column;
  gap: 8px;
  h3{
    padding: 4px 8px;
    border-radius:8px;
    color:${props => props.label === "Calidad" ? "#F95C61"
    : props.label === "Seguridad" ? "#FFE87D"
    : props.label === "Ambiente" ? "#62E596"
    : "white"};
    color:${colors.gray.light};
    // color: ${colors.white};
  }
  div{
    display:flex;
    justify-content:space-between;
  }
  img{
    border-radius:12px;
  }
  h1{
    color:${colors.blue[300]};
  }
`

export default function ArticlePost({article}){
  function formatFecha(fecha){
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatoFecha = new Intl.DateTimeFormat('es-ES', opcionesFecha);
    const fechaString = formatoFecha.format(fecha);

    const partes = fechaString.split(' de ');
    return `${partes[0].padStart(2, '0')} ${partes[1]}, ${partes[2]}`;
  }
  return(
    <Wrapper label={article.etiqueta}>
      <div>
        <h3>{article.etiqueta}</h3>
        <p>{formatFecha(article.date)}</p>
      </div>
      <img src={article.image}/>
      <h1>{article.title}</h1>
      <p>{article.description}</p>

    </Wrapper>
  )
}