import styled from "@emotion/styled"
import { colors } from "./styles/colors"
import {RiMapPin2Fill} from 'react-icons/ri'
import {AiTwotonePhone} from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'

const Wrapper = styled.div`
  width:100%;
  background: ${colors.blue["500"]};
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
    // text-align:justify;
    width:365px;
    font-size:14px;
    padding: 0px 0px;
  }
  @media(max-width:500px){
    padding: 10px 5px;
    align-items:flex-start;
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
  width:250px;
`
const SocialDiv = styled.div`
  display:flex;
  gap:8px;
  text-decoration:none;
  align-items:center;
  a{
    color:${colors.white};
  }
  @media(max-width:500px){
    gap:4px;
  }
`
const SubDiv = styled.div`
  display:flex;
  color:${colors.white};
  gap: 20px;
  align-items:center;
  p{
    width:250px;
    text-align:start;
    padding-left:16px;
  }
  @media(max-width:750px){
    flex-direction:column;
    gap:10px;
    align-items:flex-start;
  }
`

export default function Footer(){
  return(
    <Wrapper>
      {/* <hr/> */}
      <DivText>
        <OptimaDiv>
          <SubDiv>
            <SocialDiv>
              <H2 >OPTIMA CONSULTORA</H2 >
              <a href="https://www.facebook.com/people/%C3%93ptima-Consultora/100055957667113/" target="_blank" rel="noreferrer"> 
                <Circle><FaFacebookF/></Circle>
              </a>
              <a href="https://www.linkedin.com/company/optimaconsultora/?viewAsMember=true" target="_blank" rel="noreferrer"> 
                <Circle><FaLinkedinIn/></Circle>
              </a>
            </SocialDiv>
            <p>info@optima-consultora.pe</p>
          </SubDiv>
          <p>
            Copyright© Jbarz 2023. All Right Reserved. <span>Optima</span>
          </p>
        </OptimaDiv>
      </DivText>
    </Wrapper>
  )
}