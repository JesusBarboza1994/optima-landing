import styled from "@emotion/styled"
import portada from '../assets/template.jpg'
import conexiones from '../assets/conexiones.png'
import { colors } from "../styles/colors"
import Titulo from "./titulo"

const Wrapper = styled.div`
  
`
const Presentacion = styled.div`
  margin-top:70px;
`
const Portada = styled.div`
  background-image: url(${portada});
  height:300px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:${colors.white};
  h1{
    font-size: 28px;
    font-weight:400;
  }
`
const Container = styled.div`
  max-width:1200px;
  margin:auto;
  p{
    font-size:16px;
    color:${colors.gray.light};
    text-align:start;
  }
`
export default function Template({title, descrip, Main}){
  return(
    <Wrapper>
      <Portada>
        <h1>{title}</h1>
      </Portada>
      <Container>
        <Presentacion>
          <img src={conexiones} alt='imagen'/>
          <Titulo titulo={descrip}/>
        </Presentacion>
        <Main/>
      </Container>
    </Wrapper>
  )
}