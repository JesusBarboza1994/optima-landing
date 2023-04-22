import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  padding: 30px 15px 0px;
  max-width:360px;
`
const Number = styled.h1`
  font-size: 70px;
  color: ${colors.white};
  margin:0px;
  padding-right:15px;
`
const MethodText = styled.h3`
  color:${colors.gray.light};
  text-align:start;
  padding-left:10px;
  width:100%;
  margin:0px;
  background: ${colors.white};
`
const ProcessText = styled.h2`
  font-size: 32px;
  margin:0px;
`
const WrapperText = styled.div`
  display:flex;
  width:100%;
  align-items:flex-end;
  margin-top:0px;
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