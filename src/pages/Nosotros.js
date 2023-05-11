import styled from "@emotion/styled"
import portada from "../assets/template.jpg"
import { colors } from "../styles/colors"
import nosotros1 from "../assets/nosotros/nosotros1.jpg"
import nosotros2 from "../assets/nosotros/nosotros2.jpg"
import {TbLock} from "react-icons/tb"
import {GiPerson} from "react-icons/gi"
import {MdPeopleAlt} from "react-icons/md"
import {BsCheckSquareFill} from "react-icons/bs"
import {FaStreetView} from "react-icons/fa"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  p{
    text-align:justify;
    margin: 20px 0;
    color:${colors.gray.light};
  }
`
const Portada = styled.div`
  background-image: url(${portada});
  height:300px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:${colors.white};
  h1{
    font-size: 28px;
    font-weight:400;
  }
`
const TextDiv = styled.div`
  padding:50px;
  background:${colors.stone[100]};
  position:absolute;
  display:flex;
  flex-direction:column;
  margin:-50px -250px;
  top:100px;
  left:0px;
  width:627px;
  h3{
    font-size:28px;
    color:${colors.black};
    width:100%;
    text-align:start;
    font-weight:300;
    margin:0;
  }
  p{
    color:${colors.gray.light};
    margin: 20px 0px;
  }
  @media (max-width: 1200px) {
    width:517px;
    left:-100px;
  }
  @media (max-width: 990px) {
    position:static;
    margin:auto;
    width:100%;
    padding:25px;
  }
`
const DivCard = styled.div`
  margin-bottom: 200px;
  margin-left:300px;
  position:relative;
  top:45px;
  @media (max-width: 990px) {
    display:flex;
    flex-direction:column-reverse;
    width:100%;
    margin: 0 0;
    gap:20px;
    align-items:center;
  }
`
const Img = styled.img`
  width:60%;
  position:relative;
  right:-330px;
  @media (max-width: 1200px) {
    width:470px;
    right: -90px;
  }
  @media (max-width: 990px) {
    position:static;
    margin-bottom:30px;
  }
`

const Card = ({title, text1, text2, image}) =>{
  return(
    <DivCard>
      <Img src={image} alt="imagen" />
      <TextDiv>
        <h3>{title}</h3>
        <p>{text1}</p>
        <p>{text2}</p>
      </TextDiv>
    </DivCard>
  )
}
const Section = styled.section`
  margin-top: 20px;
  background: ${colors.stone[100]};
  width:100%;
  padding-bottom:100px;
  @media (max-width: 1200px) {
    margin-top:100px;
  }
`
const Title = styled.h2`
  font-size:35px;
  color:${colors.black};
  font-weight:300;
  margin-bottom:15px;
  padding-top:60px;
  line-height:100%;
`
const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:60px;
  padding: auto 12px;
  @media(max-width:1200px){
    display:grid;
    justify-items:center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap:20px;
  }
  @media(max-width:720px){
    display:flex;
    flex-wrap:wrap;
  }
`
const Hr = styled.hr`
  width:200px;
  border: 1px solid ${colors.blue[400]};
`
const Value = styled.div`
  width:360px;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: auto 20px;
  color:${props => props.color};
  p{
    color:${colors.gray.light};
    align-items:center;
    text-align:justify;
    margin: auto 20px;
    margin-top:0px;
  }
  div{
    width: 50px;
    height:50px;
    border:1px dashed ${props => props.color};
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  h4{
    margin:20px auto;
  }
  @media(max-width:1450px){
    width:300px;
  }
  
`
const SubDiv = styled.div`
  max-width:1170px;
  @media(max-width:1200px){
    max-width:970px;
  }
  @media(max-width:990px){
    max-width:750px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  @media(max-width:750px){
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    max-width:450px;
  }
  @media(max-width:480px){
    max-width:300px;
  }
`
const Div = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export default function Nosotros(){

  return(
    <>
      <Portada>
        <h1>Nosotros</h1>
      </Portada>
      <Div>
        <SubDiv>
          <Wrapper>
            <Card title={"Quienes somos"} image={nosotros1} text1={"OPTIMA CONSULTORA es una empresa especializada en la prestación de servicios profesionales de consultoría, asesoría técnica, auditoría y formación en los campos de calidad, seguridad y salud en el trabajo, medio ambiente, responsabilidad social, mejora organizacional, entre otros servicios que incluimos en nuestra cartera."} text2={""}/>
            {/* <p>Cualquier empresa que quiera mejorar sus procesos y ser más competitiva encontrará en ÓPTIMA CONSULTORA un socio que le ayudará a implementar mejoras de la forma más eficiente y eficaz, a lograr las certificaciones necesarias, y a mantener y mejorar sus sistemas de gestión.</p>
            <p>Nosotros entendemos como prioritario invertir más tiempo en escuchar al cliente, en conocer y comprender sus necesidades e identificar y garantizar el retorno de la inversión esperado de cada proyecto (reconocimiento, cumplimiento de requisitos legales, mejora de gestión y el control de procesos, diferenciación frente a competidores, etc.).</p>
            <p>Solo de esta manera podemos ofrecer, verdaderamente y con todas garantías, servicios 100% a medida de las necesidades de cada cliente. Este es el reto que perseguimos diariamente y el compromiso que asumimos en cada proyecto.</p> */}
            <Card title={"Queremos ofrecer servicios excelentes"} image={nosotros2} text1={"Nos importa la calidad de nuestros servicios y la satisfacción de nuestros clientes, por ello continuamente revisamos y analizamos nuestras metodologías y tratamos de mejorarlas para ampliar nuestra capacidad de respuesta y la calidad de nuestros servicios."} text2={"También nos preocupamos por establecer alianzas con otras empresas y de formarnos en nuevos campos de actividad para poder crecer continuamente y cubrir de este modo el mayor número de necesidades de nuestros clientes."}/>
          </Wrapper>
        </SubDiv>
      </Div>
          <Section>
            <Title>VALOR DIFERENCIAL</Title>
            <Hr/>
            <Container>
              <Value color="#a52a2a">
                <div>
                  <BsCheckSquareFill style={{scale:"1.5"}}/>
                </div>
                <h4>EXCELENCIA</h4>
                <p>Buscamos de manera continua e insustituible la calidad y la excelencia en cada trabajo, buscando superar las expectativas de cada cliente de manera trasparente y honesta.</p>
              </Value>
              <Value color="blue">
                <div>
                  <MdPeopleAlt style={{scale:"1.5"}}/>
                </div>
                <h4>ADAPTACIÓN</h4>
                <p>Capacidad de flexibilidad a las necesidades y requisitos evolutivos de cada cliente y fase de proyecto, garantizando la actualización y aplicabilidad a cada trabajo.</p>
              </Value>
              <Value color="green">
                <div>
                  <FaStreetView style={{scale:"1.5"}}/>
                </div>
                <h4>CONFIANZA</h4>
                <p>No hay nada más importante que la satisfacción del cliente. Por ello trabajamos para ofrecer soluciones ajustadas 100% a sus necesidades y de alto valor a sus empresas. Lo que decimos es lo que hacemos.</p>
              </Value>
              <Value color="orange">
                <div>
                  <TbLock style={{scale:"1.5"}}/>
                </div>
                <h4>CONFIDENCIALIDAD</h4>
                <p>La responsabilidad y garantía de seguridad y confidencialidad de la información empleada es un valor prioritario dentro de todos los proyectos y para todos los clientes.</p>
              </Value>
            </Container>
          </Section>
        
    </>
  )
}