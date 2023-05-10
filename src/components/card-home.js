import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-width:510px;
  align-items:center;
  margin: 0px 20px;
  @media (max-width: 530px) {
    width:100%;
    padding-left:15px;
    padding-right:15px;
    justify-content:center;
    margin: 0px 60px;
  }
`
const Title = styled.div`
  background:${colors.blue[100]};
  font-size:20px;
  padding:10px 0px;
  width:100%;
  color:${colors.black};
`
const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  max-width:350px;
  margin:0px;
  &:hover figcaption{
    opacity: 1;
  }
  
`
const Figcaption = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  padding: 30px;
  background-color: none;
  color: #fff;
  font-size: 16px;
  text-align: center;
  transition: opacity 0.3s ease-out;
  opacity: 0;
`
const Img= styled.img`
  display: block;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  padding: 0px 20px;
  width:100%;
  
`

export default function CardHome({title, img, text}){
  return(
    <Wrapper>
      <Title>{title}</Title>
      <Figure>
        <Img src={img} alt="imagen"/>
        <Figcaption>{text}</Figcaption>
      </Figure>
    </Wrapper>
  )
}