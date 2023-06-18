import * as Styled from './styles'
import articulo5 from '../../../assets/articles/articulo5.jpg'
export default function MainArticulo5(){
  return(
    <Styled.Wrapper>
      <Styled.Div2>
        <div>
          <p>Fue creada con el objetivo de la uniformización de normas ISO, es decir, que compartan un modelo
            de estructura común. Esta medida:</p>
          <ul>
            <li>Optimiza las normas ISO.</li>
            <li>Fomenta la certificación.</li>
            <li>Facilita la integración de los sistemas de gestión.</li>
          </ul>
          <p>Estas son algunas de las normas ISO más implementadas en las empresas y que cuentan con la
            estructura de alto nivel:</p>
          <ul>
            <li>ISO 9001:2015</li> 
            <li>ISO 14001:2015</li> 
            <li>ISO 37001:2016</li> 
            <li>ISO 45001:2018</li> 
            <li>ISO 22000:2018</li> 
            <li>ISO 50001:2018</li> 
          </ul>
        </div>
        <img src={articulo5} alt="imagen"/>
      </Styled.Div2>
    </Styled.Wrapper>
  )
}