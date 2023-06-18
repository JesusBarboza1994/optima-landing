import styled from "@emotion/styled"
import * as Styled from "./styles"
import { colors } from "../../../styles/colors"
import imagen from "../../../assets/articles/articulo2.jpg"
const Div2 = styled.div`
  display:flex;
  width:100%;
  gap:30px;
  align-items:center;
  justify-content: center;
  img{
    width:500px;
    border-radius:12px;
  }
  div{
    font-size:18px;
    color:${colors.gray.light};
    padding-right:20px;
  }
  p{
    text-align:justify;
  }

  @media(max-width:1200px){
    flex-direction:column;
    gap:0;
    div{
      padding-top:12px;
    }
    img{
      margin-top:16px;
    }
  }
  @media(max-width:475px){
    img{
      max-width:300px;
    }
  }
`

export default function MainArticulo2(){
  return(
    <Styled.Wrapper>
       <Div2>
        <div>
          <h3>¿Qué son las Partes Interesadas?</h3>
          <p>Las personas u organizaciones internas/externas que pueden afectar o verse afectadas por una
          decisión o actividad de tu organización.</p>
          <p>La más comunes son: clientes, proveedores, trabajadores, accionistas, organismos estatales, competidores, entidades financieras, entre otros.</p>
          <h3>Identifiquemos sus requisitos</h3>
          <p>Se deben identificar las necesidades y/o expectativas de las partes interesadas, aquello que esperan de tu organización.</p>
          <h3>Definamos su importancia</h3>
          <p>Las partes interesadas pueden tener diferentes niveles de autoridad, los cuales afectaran a su forma de ejercer influencia sobre nuestro sistema de gestión.</p>
          <p>Para determinar mejor su importancia, podría aplicarse la matriz Influencia / Impacto.</p>
          <h3>Implementemos acciones</h3>
          <p>Según la clasificación obtenida para cada parte interesada en la matriz, se debe plantear el compromiso que va a existir por parte de nuestra empresa para mitigar su posible impacto.</p>
        </div>
          
        <img src={imagen} alt="imagen"/>
      </Div2>

    </Styled.Wrapper>
  )
}