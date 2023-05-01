import styled from "@emotion/styled"
import cliente1 from "../assets/clientes/cliente1.png"
import cliente2 from "../assets/clientes/cliente2.png"
import cliente3 from "../assets/clientes/cliente3.png"
import cliente4 from "../assets/clientes/cliente4.png"
import cliente5 from "../assets/clientes/cliente5.png"
import cliente6 from "../assets/clientes/cliente6.png"
import cliente7 from "../assets/clientes/cliente7.png"
import cliente8 from "../assets/clientes/cliente8.png"
import cliente9 from "../assets/clientes/cliente9.png"
import cliente10 from "../assets/clientes/cliente10.png"
import cliente11 from "../assets/clientes/cliente11.png"
import cliente12 from "../assets/clientes/cliente12.png"
import cliente13 from "../assets/clientes/cliente13.png"
import cliente14 from "../assets/clientes/cliente14.png"
import cliente15 from "../assets/clientes/cliente15.png"
import cliente16 from "../assets/clientes/cliente16.png"
import cliente17 from "../assets/clientes/cliente17.png"
import cliente18 from "../assets/clientes/cliente18.png"
import { keyframes } from "@emotion/react"

const moveImages = keyframes`
0% {
  transform: translateX(0);
}
10%{
  transform: translateX(-50%);
}
90% {
  transform: translateX(-1250%);
  opacity: 1;
}
90.5{
  opacity:0;
}
91%{
  opacity:0;
}
99%{
  transform: translateX(-100%);
  opacity:0;
}
100% {
  transform: translateX(0);
  opacity: 1;
}
`;

const Wrapper = styled.div`
  display: flex;
  gap:30px;
  overflow: hidden;
  padding-left:15px;
  padding-right:15px;
  img{
    max-width: 100%;
    height: auto;
    animation: ${moveImages} 15s linear infinite;
  }
  @media(max-width:1000px){
    img{
      height:180px;
    }
  }
  @media(max-width:725px){
    img{
      height:150px;
    }
  }
  @media(max-width:550px){
    display:grid;
    width:100%;
    column-gap:40px;
    grid-template-columns: 1fr 1fr 1fr;
    img{
      animation:none;
    }
  }
  @media(max-width:450px){
    display:grid;
    column-gap:40px;
    grid-template-columns: 1fr 1fr ;
    img{
      animation:none;
      img:100px;
    }
  }
`

export default function ListClientes(){
  const clientes1 = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11, cliente12, cliente13, cliente14, cliente15, cliente16, cliente17, cliente18]
    return(
    <Wrapper>
      { clientes1.map((cliente, index) => {
        return(
          <img src={cliente} key={index + "0"}/>    
        )
      })}
    </Wrapper>
  )
}