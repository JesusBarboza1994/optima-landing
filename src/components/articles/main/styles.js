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

  }
`
export const CardGrid = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap:20px;
  padding: 20px 10px;
  @media(max-width:750px){
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
export const Div2 = styled.div`
  display:flex;
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