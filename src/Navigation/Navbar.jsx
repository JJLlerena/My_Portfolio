import { Nav, Navbar, Container} from 'react-bootstrap';
import styles from './Navbar.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function SideNav() {
 
    return (
      <Navbar className="navbar">
      <Container className="container">
        <Navbar.Brand className="brand" href="#home" />
        <h1 className="name"> Johnny Llerena</h1>
        <h2 className="certificate"> B.S Computer Science</h2>
        <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" src/>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className="navLink" href="#about">About</Nav.Link>
            <Nav.Link className="navLink" href="#skills">Skills</Nav.Link> 
            <Nav.Link className="navLink" href="#work">Work</Nav.Link>
            <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default SideNav;