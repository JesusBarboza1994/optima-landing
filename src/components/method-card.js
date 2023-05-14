import styled from "@emotion/styled"

const Wrapper = styled.div`
  div{
    width:100%;
  }
`

export default function MethodCard({number, title, text}){
  return(
    <Wrapper>
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Wrapper>
    )
}