import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:510px;
  align-items:center;
`
const Title = styled.div`
  background:${colors.blue[100]};
  font-size:22px;
  padding:10px 0px;
  width:100%;
`
const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  max-width:448px;
  margin:0px;
  &:hover img{
    transform: translateY(-50%);
    opacity: 0;
  }
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
  background-color: ${colors.blue[700]};
  color: #fff;
  font-size: 16px;
  text-align: center;
  transition: opacity 0.3s ease-out;
  opacity: 0;
`
const Img= styled.img`
  display: block;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  
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