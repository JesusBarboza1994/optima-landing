import styled from "@emotion/styled";
import { Link  } from "react-router-dom";
import { colors, ColorStyle } from "../../styles/colors";
import {RxHamburgerMenu} from "react-icons/rx"
import optima from '../../assets/optima-logo.png'
import { useState } from "react";

const Li = styled.li`
  list-style:none;
  @media (max-width: 1250px) {
    padding: 10px 0px;
    border: 1px solid ${colors.white};
  }
`
const StyledLink = styled(Link)`
  text-decoration:none;
  color: ${colors.white};
  font-weight:300;
  &:hover{
      color: ${props => props.className === "calidad" ? "red": 
                        props.className === "seguridad-y-salud" ? "yellow" :
                        props.className ==="medio-ambiente" ? "green" :
                        colors.blue[600]};
    transform: translateY(10px);
  }
  @media (max-width: 1250px) {
    color:${colors.white};
  }
`
const List = styled.ul`
  display:flex;
  flex-wrap:wrap;
  justify-content: flex-end;
  align-items:center;
  gap: 40px;
  margin:0px;
  width:100%;
  padding: 20px 40px;
  @media (max-width: 1250px) {
    flex-direction:column;
    width:50%;
    display:${props => props.menu};
    position: absolute;
    right:0;
    top:50px;
    background:${colors.black};
    padding: 0px 0px;
  }
  .calidad:hover{
    
      color:red;
    
  }
`
const Nav = styled.nav`
  background-color:${colors.black};
  color:${colors.white};
  display:flex;
  justify-content:space-between;
  align-items:center;
  position: sticky;
  top:0px;
  z-index:1;
  @media (max-width: 1250px) {
    position:relative;
  }
 
`
const Menu = styled(RxHamburgerMenu)`
  cursor:pointer;
  scale:1.5;
  display:none;
  margin-right:40px;
  @media (max-width: 1250px) {
    display:block;
  }
`

export function Navbar(){
  const [menu, setMenu] = useState("none");
  
  function handleMenu(){
    menu==="none" ? setMenu("block") : setMenu("none");    
  }

  function handleCloseMenu(){
    setMenu("none");
  }

  const urls = ["nosotros", "calidad", "seguridad-y-salud", "medio-ambiente", "homologaciones", "consultoria", "blog", "contacto"]
  const mainNav = ["Nosotros", "Calidad", "Seguridad y Salud", "Medio Ambiente", "Homologaciones", "Consultoría", "Blog", "Contacto"]
  return(
    <Nav >
      <div style={{paddingLeft:"20px"}}>
        <a href="/">
          <img src={optima} alt="optima" style={{width:"180px"}}/>
        </a>
      </div>
      <List menu={menu} onClick={handleCloseMenu}>
        { urls.map((url, index)=>{
         
          return(
            <Li>
              <StyledLink className={`${url}`} to={`/${url}`} key={'b'+index}>{mainNav[index]}</StyledLink>
            </Li>
          )
          })
        }
      
      </List>
      <Menu onClick={handleMenu} />
    </Nav>
  )
}