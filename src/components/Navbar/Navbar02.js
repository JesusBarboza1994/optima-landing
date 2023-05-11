import styled from "@emotion/styled"
import { colors } from "../../styles/colors"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router-dom"
import { useState } from "react"
import optima from '../../assets/optima-logo.png'
import {BsChevronCompactDown} from "react-icons/bs"

const Li = styled.li`
  margin: 20px 0px;
  list-style:none;
  position:relative;
  p{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  @media(min-width:1250px){
    &:hover .consultoria{
      display:flex;
      position:absolute;
      right:-90px;
      z-index:2;
    }
    &:hover .servicios{
      display:flex;
      position:absolute;
      right:-120px;
      z-index:2;
    }
  }
  @media (max-width: 1250px) {
    padding: 10px 0px;
    border: 1px solid ${colors.white};
    margin:0px;
    }
    .consultoria{
      display:${props => props.consultoria};
      padding-top:0px
    }
    .servicios{
      display:${props => props.servicios};
      padding-top:0px
    }

  }
`
const StyledLink = styled(Link)`
  text-decoration:none;
  color: ${colors.white};
  font-weight:300;
  &:hover{
      color: ${colors.blue[600]};
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
  padding: 0px 40px;
  @media (max-width: 1250px) {
    flex-direction:column;
    width:300px;
    display:${props => props.menu};
    position: absolute;
    right:0;
    top:50px;
    background:${colors.black};
    padding: 0px 0px;
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
const SubMenu = styled.div`
  display:flex;
  flex-direction:column;
  display:none;
  width:300px;
  padding-top:15px;
  background-color:${colors.black};
  a{
    margin: 10px auto;
  }
  &:hover{
    display:flex;
  }
`

export default function NavbarSection(){
  const [menu, setMenu] = useState("none");
  const [consultoria, setConsultoria] = useState("none");
  const [servicios, setServicios] = useState("none");

  function handleMenu(){
    menu==="none" ? setMenu("block") : setMenu("none");    
  }

  // function handleCloseMenu(){
  //   setMenu("none");
  // }

  function handleConsultoria(){
    if(window.innerWidth <= 1250){
      consultoria==="none" ? setConsultoria("flex") : setConsultoria("none");   
    }
  }
  function handleServicios(){
    if(window.innerWidth <= 1250){
      servicios==="none" ? setServicios("flex") : setServicios("none");   
    }
  }
  return(
    <Nav >
      <div style={{paddingLeft:"20px"}}>
        <a href="/">
          <img src={optima} alt="optima" style={{width:"180px"}}/>
        </a>
      </div>
      <List menu={menu} >
            <Li>
              <StyledLink className={`nosotros`} to={`/nosotros`}>Nosotros</StyledLink>
            </Li>  
            <Li consultoria={consultoria} onClick={handleConsultoria}>
              <p>Consultoría <BsChevronCompactDown style={{marginLeft:"10px"}}/></p>
              <SubMenu className="consultoria">
                <StyledLink to={"/sistema-gestion-iso"}>Sistema de Gestión ISO</StyledLink>
                <StyledLink>Seguridad y Salud Laboral</StyledLink>
                <StyledLink to={`/homologaciones`}>Homologaciones</StyledLink>
                <StyledLink>Hostigamiento Sexual Laboral</StyledLink>
              </SubMenu>
            </Li>  
            <Li servicios={servicios} onClick={handleServicios}>
              <p>Servicios <BsChevronCompactDown style={{marginLeft:"10px"}}/></p>
              <SubMenu className="servicios">
                <StyledLink>Capacitación</StyledLink>
                <StyledLink>Auditorías</StyledLink>
              </SubMenu>
              {/* <StyledLink className={`consultoria`} to={`/consultoria`}>Servicios</StyledLink> */}
            </Li>  
            <Li>
              <StyledLink className={`blog`} to={`/blog`}>Blog</StyledLink>
            </Li>
            <Li>
              <StyledLink className={`contacto`} to={`/contacto`}>Contacto</StyledLink>
            </Li>
      
      </List>
      <Menu onClick={handleMenu} />
    </Nav>
  )
}