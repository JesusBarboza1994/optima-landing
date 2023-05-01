import styled from "@emotion/styled"
import homologacion from "../../assets/homologacion/homologacion.png"
import { colors } from "../../styles/colors"
const Wrapper = styled.div`
  padding-bottom:50px;
  p{
    color:${colors.gray.light};
    line-height:200%;
  }
`
const Img = styled.img`
  padding: 40px 0px;
  margin:auto;
`
export default function HomologacionMain(){
  return(
    <Wrapper>
      <p>Es el proceso mediante el cual se valida las actividades, capacidades y recursos de las empresas proveedoras, definiendo quienes están calificadas para suministrar productos o servicios.</p>
      <p>Se consideran los siguientes aspectos:</p>
      <Img src={homologacion} alt="imagen"/>
      <p>1.- Situación Financiera y Obligaciones Legales, donde se determina la información relevante sobre estados financieros, endeudamiento financiero, cuentas por cobrar y pagar, proveedores, clientes, contratos, sucursales, productos y servicios suministrados, etc.</p>
      <p>2.- Gestión Operativa, donde se solicita organigrama, información sobre locales propios y/o alquilados, maquinarias y equipos, almacenes, existencias, equipamiento de cómputo, software, mantenimiento, etc.</p>
      <p>3.- Seguridad y Salud, en la cual se verifica la prevención de accidentes y enfermedades ocupacionales, procedimiento de trabajo seguro, manuales, matriz IPER y demás cumplimiento de acuerdo a la normativa vigente.</p>
      <p>4.- Gestión Ambiental, donde se revisan aspectos relacionados a la gestión de medio ambiente, normas y procedimientos ambientales, manuales, registros, etc. según aspectos principales de la norma ISO 14001.</p>
      <p>5.- Gestión de Calidad, donde se solicita información del Sistema de Calidad de la empresa, procedimientos de control de calidad, manuales de calidad, instructivos, registros, etc.</p>
      <p>6.- Gestión Comercial, donde se revisan los acuerdos comerciales, licitaciones, clientes, procedimientos de postventa, reclamos y garantías, trazabilidad, políticas de precios, etc.</p>
      <p>7.- Responsabilidad Social, donde se revisa todo lo referente a la contribución activa y voluntaria al mejoramiento social, económico y ambiental por parte de la empresa.</p>
      <p>La aprobación es en base a un puntaje de cumplimiento de estos aspectos. Algunas empresas encargadas de llevar a cabo procesos de homologación son: BUREAU VERITAS PERÚ, SGS DEL PERU, ICONTEC, HODELPE, MEGA CERTIFICACIONES, entre otras.</p>
      <p>El final de dicho proceso la empresa encargada de efectuar la auditoría de homologación emite un certificado de homologación, cuyo puntaje está basado según los resultados obtenidos en la evaluación, y cuya vigencia en promedio es de 01 año.</p>
    </Wrapper>
  )
}