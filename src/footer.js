import styled from "@emotion/styled"
import { colors } from "./styles/colors"
import {RiMapPin2Fill} from 'react-icons/ri'
import {AiTwotonePhone} from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'

const Wrapper = styled.div`
  width:100%;
  background: #28609b;
  hr{
    margin-top:0px;
    border: 1px solid ${colors.blue[400]};
    width: 100%;
  }
`
const DivText = styled.div`
  display:flex;
  gap:10px;
  justify-content:space-between;
  flex-wrap:wrap;
`
const OptimaDiv = styled.div`
  padding-left:30px;
  padding: 10px 20px;
  background:#28609b;
  display:flex;
  flex-wrap:wrap;
  width:100%;
  justify-content:space-between;
  gap:8px;
  align-items:center;
  p{
    text-align:justify;
    font-size:14px;
    padding: 0px 20px;
  }
  div{
    display:flex;
    color:${colors.white};
    gap: 20px;
  }
  h2{
    width:100%;
    text-align:start;
    font-size:18px;
    padding: 10px 20px;
    color:${colors.white};
  }
`
const ContactDiv = styled.div`
  padding:0 30px;
  h2{
    text-align:start;
    font-size:18px;
    padding: 0px 20px;
  }
  p{
    text-align:start;
    font-size:14px;
    padding: 0px 20px;
  }
`
const Circle = styled.div`
  width:40px;
  display:flex;
  justify-content:center;
  align-items: center;
  border-radius:50%;
  height:40px;
  background: ${colors.blue[700]};
  // background: #28609b;
`
const H2 = styled.h2`
  font-size:20px;
`

export default function Footer(){
  return(
    <Wrapper>
      <hr/>
      <DivText>
        <OptimaDiv>
          <div>
            <H2 >OPTIMA CONSULTORA</H2 >
            <a href="https://www.facebook.com/people/%C3%93ptima-Consultora/100055957667113/" target="_blank" rel="noreferrer"> 
              <Circle><FaFacebookF/></Circle>
            </a>
            <a href="https://www.linkedin.com/company/optimaconsultora/?viewAsMember=true" target="_blank" rel="noreferrer"> 
              <Circle><FaLinkedinIn/></Circle>
            </a>
          </div>
          <p>
            Copyright© Jbarz 2023. All Right Reserved. <span>Optima</span>
          </p>
        </OptimaDiv>
      </DivText>
    </Wrapper>
  )
}