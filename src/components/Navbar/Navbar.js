import styled from "@emotion/styled";
import { Link  } from "react-router-dom";
import { colors, ColorStyle } from "../../styles/colors";
import {RxHamburgerMenu} from "react-icons/rx"
import optima from '../../assets/optima-logo.png'
import { useState } from "react";

const Li = styled.li`
  list-style:none;
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
    width:100%;
    display:${props => props.menu};
    position: absolute;
    left:0;
    top:0;
  }
`
const StyledLink = styled(Link)`
  text-decoration:none;
  color: ${colors.white};
  font-weight:300;
  &:hover{
    color:${colors.blue[600]};
    transform: translateY(10px);
  }
`
const StyledLinkButton = styled(Link)`
  text-decoration:none;
  padding: 6px 18px;
  border-radius:8px;
  color: ${colors.white};
  &:hover{
    color:${props => ColorStyle(props.dark).textHover};
    transform: translateY(10px);
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
  @media (max-width: 1250px) {
    display:block;
  }
`

export function Navbar(){
  const [menu, setMenu] = useState("none");
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function handleMenu(){
    menu==="none" ? setMenu("block") : setMenu("none");
    
  }

  const urls = ["nosotros", "calidad", "seguridad-y-salud", "medio-ambiente", "homologaciones", "consultoria", "blog", "contacto"]
  return(
    <Nav >
      <div style={{paddingLeft:"20px"}}>
        <a href="/">
          <img src={optima} alt="optima" style={{width:"180px"}}/>
        </a>
      </div>
      <List menu={menu}>
        { urls.map((url, index)=>{
         
          return(
            <Li>
              <StyledLink  to={`/${url}`} key={'b'+index}>{capitalizeFirstLetter(url)}</StyledLink>
            </Li>
          )
          })
        }
      
      </List>
      <Menu onClick={handleMenu} />
    </Nav>
  )
}