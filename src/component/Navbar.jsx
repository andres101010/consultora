import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
//import { Nosotros } from '../nosotros/Nosotros';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Navegador = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="\src\assets\img\Logo ABZU.jpg" alt="Logo ABZU" style={{width:'80px'}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto m-auto">
              <Link className='m-3' to={"/nosotros"} style={{textDecoration:'none', color:'white', fontSize:'larger', WebkitTextStrokeWidth:'medium'}}>Nosotros</Link>
              <Link className='m-3' to={"/servicios"} style={{textDecoration:'none', color:'white', fontSize:'larger', WebkitTextStrokeWidth:'medium'}}>Servicios</Link>
              <Link className='m-3' to={"/galeria"} style={{textDecoration:'none', color:'white', fontSize:'larger', WebkitTextStrokeWidth:'medium'}}>Galeria</Link>
              <Link className='m-3' to={"/proyectos"} style={{textDecoration:'none', color:'white', fontSize:'larger', WebkitTextStrokeWidth:'medium'}}>Proyectos</Link>
              <Link className='m-3' to={"/contactos"} style={{textDecoration:'none', color:'white', fontSize:'larger', WebkitTextStrokeWidth:'medium'}}>Contactos</Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}