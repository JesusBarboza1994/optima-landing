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
    margin-top:8px;
    font-size:16px;
  }
  div{
    display:flex;
    align-items:center;
  }
  img{
    border-radius:12px;
    height:250px;
    object-fit:cover;
  }
  h1{
    color:${colors.blue[300]};
    font-size:20px;
  }
  p{
    width:100%;
    text-align:start;
  }
`

export default function ArticlePost({article}){
  const labels = article.etiquetas.split(", ")
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
        {labels.map(etiqueta => (
         <h3 key={etiqueta}>{etiqueta}</h3>
        ))}
      </div>
      <img src={article.image}/>
      <p>{formatFecha(article.date)}</p>
      <h1>{article.title}</h1>
    </Wrapper>
  )
}