import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  margin-bottom:30px;
  min-height:100%;
  color:${colors.gray.light};
  p{
    text-align:justify;
    margin-bottom:10px;
  }
  h3{
    widht:100%;
    text-align:start;
    margin-top:30px;
    margin-bottom:15px;
  }
  ul{
    width:100%;
  }
  li{
    width:100%;
    text-align:start;
    margin-bottom:8px;
  }
  h2{
    width:100%;
    text-align:start;
    margin-top:10px;
  }
  img{
    margin: 0px 0;
    margin-bottom:20px;
    width:350px;
  }
  h4{
    widht:100%;
    text-align:start;
    margin-top: 10px;
  }
  div{
    text-align:start;
    width:100%;

  }
`
export const CardGrid = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap:20px;
  padding: 20px 10px;
  @media(max-width:700px){
    grid-template-columns: 1fr;
    row-gap:20px;
  }
  @media(max-width:875px){
    column-gap:0;
  }
`
export const CardColumn = styled.div`
  display:flex;
  flex-direction:column;
  gap: 20px;
`