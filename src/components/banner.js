import styled from "@emotion/styled"
import consultoriaorganizacional from "../assets/consultoriaorganizacional.jpg"
import cotizacion from "../assets/cotizacion.jpg"
import { colors } from "../styles/colors"
import { Link } from "react-router-dom"
const Wrapper = styled.div`
  width:100%;
  display:flex;
  height:300px;
  position:relative;
  img{
    width:40%;
    position: absolute;
    height:100%;
    right:0px;
    bottom:0px;
    filter: brightness(0.9);
    opacity: 0.9;
    z-index:-2;
  }
  @media(max-width:1350px){
    height:250px;
    img{
      height:250px;
    }
  }
  @media(max-width:1500px){
    img{
      width:45%;
    }
  }
  @media(max-width:1000px){
    position:static;
    flex-direction:column;
    img{
      display:none;
    }
  }
 
`
const TextDiv = styled.div`
  color:${colors.white};
  background: ${colors.blue[500]};
  width:80%;
  height:101%;
  clip-path: polygon(0% 0, 100% 0, 90% 100%, 0 100%);
  display:flex;
  flex-direction:column;
  justify-content:center;
  h1{
    line-height: 100%;
  }
  div{
    width:70%;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
  }
  button{
    cursor:pointer;
    width:200px;
    padding: 6px 16px;
    border-radius:12px;
    background: ${colors.blue["700"]};
    border:none;
    color:${colors.white};
    font-weight:700;
  }
  h3{
    margin-bottom:30px;
    margin-top:10px;
  }
  @media(max-width:1500px){
    width:70%;
  }
  @media(max-width:1000px){
    clip-path: polygon(0% 0, 100% 0, 100% 100%, 0 100%);
    width:100%;
    height:100%;
    z-index:-1;
    div{
      align-items:center;
      margin: 20px auto;
    }
    
  }
`

export default function Banner({ question, show }){
  if(show){
    return(
      <Wrapper>
        <TextDiv>
          {
            question ?
            <div>
              <h1>¿Qué esperas para certificarte?</h1>
              <h3>Conozcámonos e iniciemos nuevos proyectos juntos</h3>
              <Link to={"/contacto"}>
                <button>Solicitar Cotización</button>
              </Link>
            </div>
          :
            <div>
              <h1>Te asesoramos</h1>
              <h3>Conozcámonos e iniciemos nuevos proyectos juntos</h3>
              <Link to={"/contacto"}>
                <button>Contáctanos</button>
              </Link>
            </div>
          }
          
        </TextDiv>
        <img src={cotizacion} alt="imagen"/>
      </Wrapper>
    )
  }
  else{
    return null
  }
}