import styled from "@emotion/styled"
import portada from "../assets/template.jpg"
import { colors } from "../styles/colors"
import contacto from "../assets/contacto.jpg"
import { useState } from "react"

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
  justify-content:center;
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
    color:${colors.black};
  }
`
const Img = styled.img`
  width:460px;  
  border-radius:24px;
  @media (max-width: 1200px) {
    max-width:460px; 
    margin-right:20px;
    margin-left:20px;
  }
  @media (max-width: 500px) {
    max-width:360px; 
    margin-right:20px;
    margin-left:20px;
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
  const [form, setForm] = useState({
    Nombre: "",
    Empresa: "",
    Telefono: "",
    Email: "",
    Mensaje: ""
  })

  const [response, setResponse] = useState("")

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
  }
  function handleTextArea(e){
    setForm({...form, Mensaje: e.target.value})
  }
  function handleSubmit(e){
    if(form.Telefono ==="" && form.Email ==="") return
    e.preventDefault()
    const formEle = document.querySelector("form")
    console.log("Submitted")
    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbxwuQxj3pYB8Au7geeDcadVbCUKKH1dM61UMV095A_qrtywnoHFbwNw7ug-PjWdw9M5dQ/exec ",{
      
      method:"POST",
      body:formData
    }).then(response =>{
      if(response.ok){
        setResponse("Mensaje enviado con éxito!")
      }
    }
    )
  }

  return(
    <>
      <Portada>
        <h1>Contacto</h1>
      </Portada>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <p>Escríbanos:</p>
          { response === "" ? null : <p style={{color:"green", fontSize:"16px"}}>{response}</p> }
          <Input value={form.Nombre} onChange={handleChange} placeholder={"Nombre"} name={"Nombre"}/>
          <Input value={form.Empresa} onChange={handleChange} placeholder={"Empresa"} name={"Empresa"}/>
          <Input value={form.Email} onChange={handleChange} placeholder={"Email"} name={"Email"}/>
          <Input value={form.Telefono} onChange={handleChange} placeholder={"Teléfono"} name={"Telefono"}/>
          <InputArea value={form.Mensaje} onChange={handleTextArea} placeholder={"Mensaje"} name={"Mensaje"}/>
          <input value={form.Mensaje} style={{display:"none"}}/>
          <Button>ENVIAR</Button>

        </Form>
        <Img src={contacto} alt="imagen"/>
      </Wrapper>
    </>
  )
}