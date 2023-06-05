import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import { MdLabelImportant } from "react-icons/md"

const UlContainer = styled.div`
  display:flex;
  // flex-wrap:wrap;
  border-radius:16px;
  background: ${colors.stone[100]};
  padding:20px;
  justify-content:center;
  margin-bottom:30px;
  margin-left:16px;
  margin-right:16px;
  gap:30px;
  p{
    color:${colors.gray.light};
    line-height:150%;
  }
  ul{
    width:100%;
    color:${colors.white};
    padding-left:0px;
  }
  li{
    width:100%;
    display:flex;
    align-items:flex-start;
    text-align:start;
    color:${colors.gray.light};
    list-style:none;
    padding-top:12px;
    margin-bottom:15px;
    p{
      text-align:start;
      margin-bottom:0px;
      font-size:20px;
      color:${colors.gray.light}
    }
  }
  @media(max-width:750px){
    flex-direction: column;
    gap:0;
    ul{
      margin-bottom:0px;
    }
  }
`
const Vineta = styled(MdLabelImportant)`
  width:16px;
  margin-right:10px; 
  margin-top:8px;
  color:${colors.blue["500"]};
  scale:2;
`
export default function NuestrosServicios({list1, list2}){
  return(
    <UlContainer>
      <ul>
        {list1.map( item =>{
          return <li><span><Vineta/></span><p>{item}</p></li>
        })}
      </ul>
      <ul>
        {list2.map( item =>{
          return <li><span><Vineta/></span><p>{item}</p></li>
        })}
      </ul>
    </UlContainer>
  )
}