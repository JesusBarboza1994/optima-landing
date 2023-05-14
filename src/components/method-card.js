import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  grid-column: ${props => props.col}/ span 2;
  grid-row: ${props => props.row};
  display:flex;
  width:100%;
  background: ${colors.stone[100]};
  padding: 30px;
  border-radius: 12px;
  span{
    font-size:72px;
    color:${colors.blue["700"]};
    padding-right:10px;
    font-weight:600;
  }
  div{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
  }
  h3{
    width:100%;
    text-align:start;
    padding-top:16px;
    font-size:24px;
    color:${colors.blue["700"]};
  }
  p{
    text-align:justify;
    padding-top:12px;
  }
  @media(max-width:750px){
    span{
      font-size:24px;
    }
    h3{
      padding-top:0px;
    }
    p{
      text-align:start;
    }
  }
  @media(max-width:480px){
    padding: 15px;
  }
`

export default function MethodCard({number, title, text, col, row}){
  return(
    <Wrapper col={col} row={row}>
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Wrapper>
    )
}