import styled from '@emotion/styled'
import portada1 from '../assets/portada1.jpg'
import portada2 from '../assets/portada2.jpg'
import { useEffect, useState } from 'react'
import { colors } from '../styles/colors'
const images = [portada1, portada2]
const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 800px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => images[Number(props.image)]});
  transition: background 1s ease-in-out;
  h1{
    color:${colors.white};
    font-weight:500;
  }
  a button{
    background: ${colors.blue[600]};
    border:none;
    color:${colors.white};
    padding: 8px 28px;
    border-radius:8px;
    cursor:pointer;
  }
`;

export default function Portada(){
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      currentImage === 0 ? setCurrentImage(1) :  setCurrentImage(0)
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentImage]);
  return(
    <Wrapper image={currentImage}>
       <h1>Empresas más competitivas y sostenibles</h1>
       <a href='/contacto'>
        <button>VER MÁS</button>
       </a>
    </Wrapper>
  )
}