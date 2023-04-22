import styled from "@emotion/styled"
import { colors } from "./styles/colors"
import {RiMapPin2Fill} from 'react-icons/ri'
import {AiTwotonePhone} from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'

const Wrapper = styled.div`
  width:100%;

  hr{
    margin-top:0px;
    border: 1px solid ${colors.blue[400]};
    width: 100%;
  }
`
const BlueDiv = styled.div`
  background: ${colors.blue[300]};
  color:${colors.white};
  padding:20px 0px;
  font-size:14px;
  span{
    font-weight:800;
  }
`
const DivText = styled.div`
  display:flex;
  gap:40px;
  padding-bottom:40px;
  justify-content:space-evenly;
`
const OptimaDiv = styled.div`
  max-width:1000px;
  p{
    text-align:justify;
  }
  div{
    display:flex;
    color:${colors.white};
    gap: 20px;
  }
`
const ContactDiv = styled.div`

`
const Circle = styled.div`
  width:40px;
  display:flex;
  justify-content:center;
  align-items: center;
  border-radius:50%;
  height:40px;
  background: ${colors.blue[700]};
`

export default function Footer(){
  return(
    <Wrapper>
      <hr/>
      <DivText>
        <OptimaDiv>
          <h2>OPTIMA CONSULTORA</h2>
          <p>Cualquier empresa que quiera mejorar sus procesos y ser más competitiva encontrará en OPTIMA CONSULTORA un socio que le ayudará a implementar mejoras de la forma más eficiente y eficaz, a lograr las certificaciones necesarias y a mantener y mejorar sus sistemas de gestión.</p>
          <div>
            <a href="https://www.facebook.com/people/%C3%93ptima-Consultora/100055957667113/" target="_blank" rel="noreferrer"> 
              <Circle><FaFacebookF/></Circle>
            </a>
            <a href="https://www.linkedin.com/company/optimaconsultora/?viewAsMember=true" target="_blank" rel="noreferrer"> 
              <Circle><FaLinkedinIn/></Circle>
            </a>
          </div>
        </OptimaDiv>
        <ContactDiv>
         <h2>CONTACTO</h2>
         <p><RiMapPin2Fill/> Av. José Fausto Sánchez Carrión 930 Magdalena del Mar.</p>
         <p><AiTwotonePhone/> 993 229 232</p>
         <p><IoMdMail/>  info@optima-consultora.pe</p>
        </ContactDiv>
      </DivText>
      <BlueDiv>Copyright© Jbarz 2022. All Right Reserved. <span>Optima</span> </BlueDiv>
    </Wrapper>
  )
}