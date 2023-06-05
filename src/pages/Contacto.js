import styled from "@emotion/styled"
import portada from "../assets/template.jpg"
import { colors } from "../styles/colors"
import contacto from "../assets/contacto.jpg"

const Portada = styled.div`
  background-image: url(${portada});
  height:300px;
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  color:${colors.white};
  h1{
    font-size: 28px;
    font-weight:400;
  }
`
const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-end;
  gap:30px;
  margin: 40px auto;
  padding: 0px 20px;
  @media (max-width: 1250px) {
    justify-content:center;
  }
`
const Form = styled.form`
  max-width:560px;
  display:flex;
  flex-direction:column;
  width:100%;
  gap:20px;
  p{
    width:100%;
    text-align:start;
    font-size:22px;
    font-weight:600;
    colors:${colors.blue[700]};
  }
`
const Img = styled.img`
  width:50%;  
  @media (max-width: 1200px) {
    width:100%;
  }
`
const Input = styled.input`
  width:100%;
  padding:10px 20px;
  border: 1px solid #dddddd;
`
const InputArea = styled.textarea`
  width:100%;
  padding-top:10px;
  padding-left: 20px;
  min-height:80px;
  border: 1px solid #dddddd;
`
const Button = styled.button`
  background:${colors.blue[200]};
  width:100%;
  padding: 12px 30px;
  border:none;
  color:${colors.white};
  cursor: pointer;
  &:hover{
    background:${colors.gray.medium};
  }
`



export default function Contacto(){
  return(
    <>
      <Portada>
        <h1>Contacto</h1>
      </Portada>
      <Wrapper>
        <Form>
          <p>Escríbanos:</p>
          <Input placeholder={"Nombre"}/>
          <Input placeholder={"Empresa"}/>
          <Input placeholder={"Email"}/>
          <Input placeholder={"Teléfono"}/>
          <InputArea placeholder={"Mensaje"}/>
          <Button>ENVIAR</Button>

        </Form>
        <Img src={contacto} alt="imagen"/>
      </Wrapper>
    </>
  )
}