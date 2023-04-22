import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const H1 = styled.h1`
  font-size:22px;
  font-weight:500;

`
const Hr = styled.hr`
  border: 1px solid ${colors.blue[400]};
  width: 200px;
  margin-bottom: 20px;
`


export default function Titulo({titulo}){
  return(
    <>
      <H1>{titulo}</H1>
      <Hr/>
    </>
  )
}