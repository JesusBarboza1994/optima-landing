import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  display:flex;
  padding: 30px 15px 0px;
  width:390px;
  flex-direction:column;
  @media(max-width:1000px){
    width:100%;
    align-items:center;
  }
`
const Number = styled.h1`
  font-size: 70px;
  color: ${colors.white};
  margin:0px;
  padding-right:15px;
  @media(max-width:1000px){
    padding-bottom:30px;
  }
`
const MethodText = styled.h3`
  color:${colors.gray.light};
  font-size:16px;
  text-align:start;
  padding-left:10px;
  width:100%;
  margin:0px;
  background: ${colors.white};
  margin-bottom: 15px;
`
const ProcessText = styled.h2`
  font-size: 28px;
  margin:0px;
  color:${colors.gray.light};
`
const WrapperText = styled.div`
  display:flex;
  width:100%;
  align-items:flex-start;
  margin-top:0px;
  @media(max-width:1000px){
    flex-direction:column;
    align-items:center;
  }
`
const Div = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:10px;
`

export default function MethodHome({number, process, method, text}){
  return(
    <Wrapper>
      <WrapperText>
        <Number>{number}</Number>
        <Div>
          <ProcessText>{process}</ProcessText>
          <MethodText>{method}</MethodText>
        </Div>

      </WrapperText>
      <p style={{textAlign:"justify"}}>{text}</p>
    </Wrapper>    
  )
}