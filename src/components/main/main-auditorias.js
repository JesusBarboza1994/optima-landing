import styled from "@emotion/styled"
import auditoria from "../../assets/auditorias.png"

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
  p{
    text-align:center;
  }
  img{
    width:80%;
  }
  align-items:center;
  margin-bottom: 40px;
`

export default function AuditoriasMain(){
  return(
    <Wrapper>
      <p>Nuestro servicio de auditoría consiste en una revisión de su Sistema de Gestión a través de la verificación de la información documentada y su nivel de implementación para determinar el grado de cumplimiento de los estándares.</p>
      <img src={auditoria}/>
    </Wrapper>
  )
}