import styled from "@emotion/styled"
import portada from "../assets/template.jpg"
import { colors } from "../styles/colors"
import nosotros1 from "../assets/nosotros/nosotros1.jpg"
import nosotros2 from "../assets/nosotros/nosotros2.jpg"

const Wrapper = styled .div`
  max-width:1140px;
  margin:auto;
  p{
    text-align:justify;
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
  padding:60px;
  background:${colors.stone[100]};
  position:absolute;
  display:flex;
  flex-direction:column;
  margin:-50px -250px;
  top:100px;
  left:0px;
  width:500px;
  h3{
    font-size:28px;
    color:${colors.black}
    width:100%;
    text-align:start;
    font-weight:300;
    margin:0;
  }
  p{
    color:${colors.gray.light};
  }
`
const DivCard = styled.div`
  margin-bottom: 200px;
  margin-left:300px;
  position:relative;
  top:45px;
`
const Img = styled.img`
  width:60%;
  position:relative;
  right:-150px;
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

export default function Nosotros(){
  return(
    <>
      <Portada>
        <h1>Nosotros</h1>
      </Portada>
      <Wrapper>
        <Card title={"Quienes somos"} image={nosotros1} text1={"OPTIMA CONSULTORA es una empresa especializada en la prestación de servicios profesionales de consultoría, asesoría técnica, auditoría y formación en los campos de calidad, seguridad y salud en el trabajo, medio ambiente, responsabilidad social, mejora organizacional, entre otros servicios que incluimos en nuestra cartera."} text2={""}/>
        <p>Cualquier empresa que quiera mejorar sus procesos y ser más competitiva encontrará en ÓPTIMA CONSULTORA un socio que le ayudará a implementar mejoras de la forma más eficiente y eficaz, a lograr las certificaciones necesarias, y a mantener y mejorar sus sistemas de gestión.</p>
        <p>Nosotros entendemos como prioritario invertir más tiempo en escuchar al cliente, en conocer y comprender sus necesidades e identificar y garantizar el retorno de la inversión esperado de cada proyecto (reconocimiento, cumplimiento de requisitos legales, mejora de gestión y el control de procesos, diferenciación frente a competidores, etc.).</p>
        <p>Solo de esta manera podemos ofrecer, verdaderamente y con todas garantías, servicios 100% a medida de las necesidades de cada cliente. Este es el reto que perseguimos diariamente y el compromiso que asumimos en cada proyecto.</p>
        <Card title={"Queremos ofrecer servicios excelentes"} image={nosotros2} text1={"Nos importa la calidad de nuestros servicios y la satisfacción de nuestros clientes, por ello continuamente revisamos y analizamos nuestras metodologías y tratamos de mejorarlas para ampliar nuestra capacidad de respuesta y la calidad de nuestros servicios."} text2={"También nos preocupamos por establecer alianzas con otras empresas y de formarnos en nuevos campos de actividad para poder crecer continuamente y cubrir de este modo el mayor número de necesidades de nuestros clientes."}/>
      </Wrapper>
    </>
  )
}