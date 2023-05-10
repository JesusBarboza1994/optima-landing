import styled from "@emotion/styled"
import portada from '../assets/template.jpg'
import conexiones from '../assets/conexiones.png'
import { colors } from "../styles/colors"
import Titulo from "./titulo"

const Wrapper = styled.div`
 
`
const Presentacion = styled.div`
  margin-top:70px;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const Portada = styled.div`
  background-image: url(${portada});
  height:300px;
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  color:${colors.white};
  h1{
    font-size: 28px;
    font-weight:400;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  align-items:center;
  max-width:1170px;
  margin:auto;
  padding-left:15px;
  padding-right:15px;
  p{
    font-size:16px;
    color:${colors.gray.light};
    text-align:start;
  }
  @media(max-width:1200px){
    max-width:970px;
  }
  @media(max-width:990px){
    max-width:750px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  @media(max-width:750px){
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    max-width:450px;
  }
  @media(max-width:480px){
    max-width:300px;
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
          {/* <img src={conexiones} alt='imagen'/> */}
          <Titulo titulo={descrip}/>
        </Presentacion>
        <Main/>
      </Container>
    </Wrapper>
  )
}