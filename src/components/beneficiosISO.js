import styled from "@emotion/styled"

const Wrapper = styled.div`
  display:flex;
  width:100%;
  align-items:flex-start;
  p{
    line-height: 120%;
  }
  span{
    color: ${props => props.color};
  }
  @media(max-width:1200px){
    // width: 400px;
  }
  @media(max-width:990px){
    height:100px;
    align-items:center;
  }
  @media(max-width:990px){
    height:150px;
    align-items:center;
  }
  @media(max-width:500px){
    flex-direction:column;
    height:200px;
  }
  @media(max-width:475px){
    flex-direction:column;
    height:250px;
  }
`
const Img = styled.img`
  width:100px;
  max-height:100px;
  margin-right:10px;
  @media(max-width:1200px){
    width: 160px;
  }
  @media(max-width:990px){
    height:100px;
  }
  @media(max-width:500px){
    width:120px;
  }
  
`
export default function BeneficiosIso({img, text, description, color}){
  return(
    <Wrapper color={color}>
      <Img src={img} alt="imagen"/>
      <p><span>{description}</span> {text}</p>
    </Wrapper>
  )
}