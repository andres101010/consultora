
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Mision = ()=>{
    return(
        <> 
        <h1 className="text-center text-primary mt-3">ABZU Exploration & Mining Business</h1>
        <h2 className='text-center text-white'>Mision y Ojetivos</h2>
        <h6 className='text-white' style={{margin:'20px'}}>Nos esforzamos para proporcionar servicios que satisfagan las necesidades únicas de nuestros clientes y agreguen valor a sus proyectos.</h6>
        <p style={{font:'small-caption', color:'white',margin:'20px'}}>Para generar proyectos exitosos nos basamos en una gestión competente de acuerdo a una eficaz aplicación e interpretación de la geología, la geoquímica y la geofísica aplicando nuevas e innovadoras tecnologías.</p>
        <Container fluid className='mt-5'>
        <Row>
          <Col > <Card className='card-mision'>
      <Card.Img variant="top" src="src/assets/img/klipartz.com(24).png" />
      <Card.Body>
        <Card.Title>Nuestra Vision</Card.Title>
        <Card.Text>
        Que la minería sea vista como una actividad beneficiosa y como uno de los motores económicos de una región, a través de operaciones seguras, compromiso social y respeto por el medio ambiente. es que la minería sea vista como una actividad beneficiosa y como uno de los motores económicos de una región, a través de operaciones seguras, compromiso social y respeto por el medio ambiente.
        Ofrecer servicios que satisfagan las necesidades reales y agreguen valor a los proyectos de los clientes 
        Desarrollar y adoptar nuevas tecnologías y metodologías para beneficiar a nuestros clientes y a nuestra empresa 
        Ser dignos de la confianza de nuestros clientes al hacernos responsables de nuestras acciones
        </Card.Text>
      </Card.Body>
      </Card></Col>
          <Col> <Card className='card-mision'>
      <Card.Img className='img-obj' variant="top" src="src/assets/img/business-war-room.jpg" />
      <Card.Body>
        <Card.Title>Nuestros Objetivo</Card.Title>
        <Card.Text>
        Nos hemos propuesto mantener un ambiente laboral progresista que: <br />
            
         _ Ayude a los empleados a desarrollar carreras satisfactorias y desafiantes <br />
         _ Permita a nuestro personal desarrollar su cartera de clientes así como aumentar su reputación en la trayectoria profesional de su elección <br />
         _ Conduzca a pensamiento y soluciones innovadoras <br />
         _ Fomente la colaboración entre nuestras oficinas internacionales <br />
         _ Reconozca y recompense la excelencia y los logros <br />
         _ Proporcione a los empleados accionistas una inversión superior.  
        </Card.Text>
      </Card.Body>
      </Card></Col>
        
        </Row>
      </Container>
        </>
    )
}