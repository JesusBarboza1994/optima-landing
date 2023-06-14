import { colors } from '../../../styles/colors'
import CardIso45001 from '../../card-iso45001'
import * as Styled from './styles'
export default function MainArticulo8(){
  return(
    <Styled.Wrapper>
      <p>El proceso de implantación de un Sistema de Gestión basado en la norma ISO-14001 consta de varios
         pasos:</p>
      <Styled.CardGrid>
        <Styled.CardColumn>
          <CardIso45001 number={"01"} text={"Analizar el contexto legal de la organización, asegurándose de que cumple la legislación vigente."} color={colors.blue[500]}/>
          <CardIso45001 number={"02"} text={"Determinar la situación de la organización, comprendiendo que cuestiones tanto internas como externas le afectan."} color={colors.blue[500]}/>
          <CardIso45001 number={"03"} text={"Determinar los aspectos ambientales, evaluando cuáles de ellos son significativos para la actividad de la organización."} color={colors.blue[500]}/>
          <CardIso45001 number={"04"} text={"Definir los objetivos y resultados que pretende alcanzar la organización."} color={colors.blue[500]}/>
        </Styled.CardColumn>
        <Styled.CardColumn>
          <CardIso45001 number={"05"} text={"Desarrollar planes de actuación y contingencia para situaciones de emergencia."} color={colors.yellow}/>
          <CardIso45001 number={"06"} text={"Desarrollar un Sistema de Gestión Medio Ambiental de acuerdo a la complejidad de la empresa."} color={colors.yellow}/>
          <CardIso45001 number={"07"} text={"Documentar todos aquellos requisitos exigidos por norma o legislación vigente."} color={colors.yellow}/>
          <CardIso45001 number={"08"} text={"Realizar la formación necesaria y sensibilizar a los empleados sobre ser responsables con el medio ambiente."} color={colors.yellow}/>
        </Styled.CardColumn>
        <Styled.CardColumn>
          <CardIso45001 number={"09"} text={"Poner en funcionamiento el Sistema de Gestión."} color={colors.green}/>
          <CardIso45001 number={"10"} text={"Realizar la auditoría interna."} color={colors.green}/>
          <CardIso45001 number={"11"} text={"Realizar la revisión por la dirección."} color={colors.green}/>
          <CardIso45001 number={"12"} text={"Solicitar la auditoría de certificación."} color={colors.green}/>
        </Styled.CardColumn>
      </Styled.CardGrid>
      
    </Styled.Wrapper>
  )
}