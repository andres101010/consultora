import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BsFillGeoAltFill } from "react-icons/bs";
import{ BsWhatsapp } from "react-icons/bs";
import facebook from '/src/assets/img/facebook.jpg';
import  location  from '/src/assets/img/location.jpg';
import whatsapp from '/src/assets/img/whatsapp.jpg';
import linkedin from '/src/assets/img/linkedin.jpg';

export const Contantos = ()=>{
    return(
        <div>
            <h1 className="text-center text-white m-5">Contactenos</h1>
            <Container>
            <Row>
        <Col md={6}>
        <Card className='d-block w-100'>
      <Card.Img variant="top" src={location} className='img-location' />
      <Card.Body>
        <Card.Title>Localizacion</Card.Title>
        <Card.Text>
            <p>Nos puede localizar en la siguiente direccion:</p>
         <BsFillGeoAltFill />calle Santa Fe 502 #- San Miguel De Tucumán
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
       
        <Col  md={6}>
        <Card className='d-block w-100'>
      <Card.Img  variant="top" src={whatsapp} className='img-whatsapp'/>
      <Card.Body>
        <Card.Title>Whatsapp</Card.Title>
        <Card.Text>
         <p>Puedes comunicarte con nosotros via whatsapp.</p>
           <BsWhatsapp /> <a href="+54 9 381-5459826">+54 9 381-5459826</a> <br />
           <BsWhatsapp /> <a href="+54 9 381-6071866">+54 9 381-6071866</a>
         
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>
      <footer className='footer-contacto'>
      <h4 className='text-white m-5 '>Seguinos</h4>
      <ul className='text-white m-3'>
        <li> <Link to={'https://www.facebook.com/profile.php?id=100054477969189'} target='_blank'><img src={facebook} alt="Facebook" style={{width:'50px'}}/></Link>
        </li>
        <li>
            <Link to={'https://www.linkedin.com/company/abzu-mining-exploration/about/'} target='_blank'><img src={linkedin} alt="Linkedin" style={{width:'50px'}}/></Link>
        </li>
      </ul>
        <h4 className='text-white m-5'>Servicios</h4>
        <ul className='text-white'>
            <li>Estrategia y gestión de proyectos</li>
            <li>Exploración mineral</li>
            <li>Control y Garantia de calidad de los datos</li>

        </ul>
        <h4 className='text-white m-5'>Nosotros</h4>
        <p className='text-white m-4'>ABZU nace con el objetivo de ofrecer asesoramiento y orientación en operaciones de inversión y factibilidad de proyectos, análisis de riesgos, evaluación y modelización de recursos, planificación y decisiones estratégicas.</p>
      </footer>
        </div>
    )
}