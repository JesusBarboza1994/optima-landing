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
    background:${props => props.label === "Calidad" ? "#F95C61"
                         : props.label === "Seguridad" ? "#FFE87D"
                         : props.label === "Ambiente" ? "#62E596"
                         : "white"};
    color: ${colors.white};
  }
  div{
    display:flex;
    justify-content:space-between;
  }
  img{
    border-radius:12px;
  }
`

export default function ArticlePost({article}){
  return(
    <Wrapper label={article.etiqueta}>
      <div>
        <h3>{article.etiqueta}</h3>
        <p>{article.date.toDateString()}</p>
      </div>
      <img src={article.image}/>
      <h1>{article.title}</h1>
      <p>{article.description}</p>

    </Wrapper>
  )
}