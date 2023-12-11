

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function CollapsibleExample() {
  const Cart=useSelector(state=>state.Cart)
  return (
    <Navbar collapseOnSelect expand="lg"  id='nava'  >
      <Container>
      <Navbar.Brand ><Link to="/"><img src={process.env.PUBLIC_URL+`/Image/logo-en.svg`} alt="" /> </Link> </Navbar.Brand>
        
        <Navbar.Toggle bg-white aria-controls="responsive-navbar-nav" />
       
        <Navbar.Collapse bg-white id="responsive-navbar-nav">
      
          <Nav className="me-auto">
          <Navbar.Brand  style={{color:"#ef8f00",fontSize:"1.5rem",lineHeight :"1.75rem",fontWeight:"bold",borderLeft:"2px solid green",padding:"10px" }} >BILLETTERIE <br />
         OFFICIELLE</Navbar.Brand>
          </Nav>
          <Nav>
          <NavDropdown  title={<Image  src={process.env.PUBLIC_URL+`/Image/user.svg`} width="50"
                height="30"/>} id="collapsible-nav-dropdown">
              <NavDropdown.Item eventKey={2} style={{background:"white"}} ><Link  id='MyLink' to="/Login">Login</Link></NavDropdown.Item>
            
              <NavDropdown.Item eventKey={2} style={{background:"white"}} ><Link id='MyLink' to="/signup">Sign up</Link></NavDropdown.Item>
              
          
            </NavDropdown>
            <span style={{borderLeft:"2px solid green"}}></span>
            <Nav.Link eventKey={2} ><Link to="/panier"><img src={process.env.PUBLIC_URL+`/Image/cart.svg`} width="50" height="30" alt="" /></Link>
            <span style={{color:"white",fontSize:"15px"}}>{Cart.length}</span></Nav.Link>
            <span style={{borderLeft:"2px solid green"}}></span>
            <Nav.Link eventKey={2} >
            <Link to="/">
              <img src={process.env.PUBLIC_URL+`/Image/home.svg`} width="50" height="30" alt="" />
              </Link>
            </Nav.Link>
            <span style={{borderLeft:"2px solid green"}}></span>
            <Nav.Link eventKey={2}  href="#memes">
              
              <img src={process.env.PUBLIC_URL+`/Image/globe.svg`} width="50" height="30" alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;