import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const H1 = styled.h1`
  font-size:22px;
  font-weight:500;
  padding-top:50px;
  color:${colors.gray.medium};
  font-weight:600;
`
const Hr = styled.hr`
  width: 200px;
  margin-bottom: 40px;
  margin-top: 20px;
  border:0;
  border-top: 1px solid ${colors.blue[200]};
  font-weight:100;
`


export default function Titulo({titulo, hr}){

  return(
    <>
      <H1>{titulo}</H1>
      <Hr/>
    </>
  )
}