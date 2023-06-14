import { colors } from '../../../styles/colors'
import CardIso45001 from '../../card-iso45001'
import * as Styled from './styles'
export default function MainArticulo7(){
  return(
    <Styled.Wrapper>
      <p>Para llevar a cabo la implementación de un Sistema de Gestión de la Calidad en su organización, y
         poder optar a certificarse en ISO-9001, deberá seguir una serie de pasos:</p>
         <Styled.CardGrid>
        <Styled.CardColumn>
          <CardIso45001 number={"01"} text={"Analizar el contexto legal de la organización, asegurándose de que cumple la legislación vigente."} color={colors.blue[500]}/>
          <CardIso45001 number={"02"} text={"Determinar la situación de la organización, comprendiendo que cuestiones tanto internas como externas le afectan."} color={colors.blue[500]}/>
          <CardIso45001 number={"03"} text={"Definir los objetivos y resultados que pretende alcanzar la organización."} color={colors.blue[500]}/>
        </Styled.CardColumn>
        <Styled.CardColumn>
          <CardIso45001 number={"04"} text={"Desarrollar un Sistema de Gestión de la Calidad de acuerdo a la complejidad de la empresa."} color={colors.yellow}/>
          <CardIso45001 number={"05"} text={"Documentar todos aquellos requisitos exigidos por la norma."} color={colors.yellow}/>
          <CardIso45001 number={"06"} text={"Identificar las necesidades de formación que se requieran"} color={colors.yellow}/>
        </Styled.CardColumn>
        <Styled.CardColumn>
          <CardIso45001 number={"07"} text={"Poner en funcionamiento el Sistema de Gestión."} color={colors.green}/>
          <CardIso45001 number={"08"} text={"Realizar la auditoría interna."} color={colors.green}/>
          <CardIso45001 number={"09"} text={"Solicitar la auditoría de certificación."} color={colors.green}/>
        </Styled.CardColumn>
      </Styled.CardGrid>
      
    </Styled.Wrapper>
  )
}