import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgcarla from '/src/assets/img/imgcarla.jpg';
import imgcarla2 from '/src/assets/img/imgcarla2.jpg';
export const Proyectos = ()=>{
    return(
        <div>
            <h1 className="text-center text-white m-3">Proyectos</h1>
    <Container>
      <Row>
        <Col md={12} style={{border:'double', borderColor:'darkgray', borderRadius:'5px',margin:'5px'}}>
            <img src={imgcarla} alt="carla1.bis" className='d-block w-100 mb-3'/>
            <p className='text-canter text-white'>La propiedad Carla I se encuentra en el extremo sur de un prominente corredor estructural NE-SW Zona 
               de transferencia de Tucum&aacute;n, que ha sido identificada como importante en la historia del emplazamiento
               de los centros de p&oacute;rfido del Mioceno superior Cu-An (Mo) (por ejemplo, Bajo de la Alumbrera y Agua Rica),
               en esta parte de Argentina. Hasta la fecha, no se han realizado citas por edades en la propiedad de Carla I y no se
               han publicado fechas de edad.
            </p>
            <span className='text-center text-success'>"Carla I"</span>
        </Col>
        <Col md={12} style={{border:'double', borderColor:'darkgray', borderRadius:'5px',margin:'5px'}}>
        <img src={imgcarla2} alt="carla1" className='d-block w-100 mb-3'/>
        <p className='text-canter text-white'>The “Carla I” property claim includes 2,000 has and is located in the Belen department of the Catamarca Province of NW Argentina. 
        Access to the general area is good via the paved highway (Ruta 40) that connects the city of Catamarca, from the south, with the small town of Londres, 
        located Approximately 7.5 km to the east of the property</p>
        <span className='text-center text-success'>"Carla I"</span>
        </Col>
        
      </Row>
    </Container>
        </div>
    )
}