import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import Titulo from "./titulo"
import Banner from "./banner"

const Container = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  // min-height:${window.innerHeight}px;
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
const Presentacion = styled.div`
  // margin-top:70px;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export default function TemplateBlog({descrip, Main}){
  return(
    <>
      <Container>
        <Presentacion>
          <Titulo titulo={descrip}/>
        </Presentacion>
        <Main/>
      </Container>
      <Banner show={true} blog={true}/>
    </>
  )
}