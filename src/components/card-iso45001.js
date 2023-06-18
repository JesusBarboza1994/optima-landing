import styled from "@emotion/styled"
import { colors } from "../styles/colors"
const Div1 = styled.div`
  border-right: 1px solid ${colors.white};
  padding-right: 12px;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Div2= styled.div`
  padding: 0 12px;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Wrapper = styled.div`
  height:120px;
  padding: 12px 12px;
  width:350px;
  display:flex;
  background:${props => props.color};
  h1{
    color:${colors.white};
    font-size:36px;
  }
  p{
    color:${colors.white};
    font-size:14px;
    text-align:start;
  }
  @media(max-width:1200px){
    height:120px;
    width:320px;
  }
  @media(max-width:1050px){
    height:160px;
    width:250px;
    p{
      font-size:12px;
      line-height:1.25rem;
    }
  }
  @media(max-width:875px){
    height:150px;
    width:220px;
    h1{
      font-size:24px;
    }
    p{
      font-size:12px;
      line-height:1.25rem;
    }
  }
  @media(max-width:750px){
    width:100%;
    height:80px;
  }
  @media(max-width:500px){
    width:100%;
    height:120px;
  }
`
export default function CardIso45001({number, text, color}){
  return(
  <Wrapper color={color}>
    <Div1>
      <h1>{number}</h1>
    </Div1>
    <Div2>
      <p>{text}</p>
    </Div2>
  </Wrapper>)
}