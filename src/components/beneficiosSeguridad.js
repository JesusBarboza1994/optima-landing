import styled from "@emotion/styled"

const Wrapper = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  p{
    line-height: 120%;
     margin-left:20px;
  }
  span{
    color: ${props => props.color};
    font-weight:800;
  }
 
  @media(max-width:1200px){
    // width: 400px;
  }
  @media(max-width:990px){
    height:100px;
    align-items:center;
  }
  @media(max-width:990px){
    height:100px;
    align-items:center;
  }
  @media(max-width:500px){
    flex-direction:column;
    height:150px;
    p{
      text-align:center;
    }
  }
  @media(max-width:475px){
    flex-direction:column;
    height:150px;
  }
`
const Img = styled.img`
  width:80px;

  @media(max-width:1200px){
    width: 80px;
  }
  @media(max-width:990px){
    height:80px;
  }
  @media(max-width:500px){
    width:80px;
  }
  
`
export default function BeneficiosSeguridad({img, text}){
  return(
    <Wrapper>
      <Img src={img} alt="imagen"/>
      <p>{text}</p>
    </Wrapper>
  )
}