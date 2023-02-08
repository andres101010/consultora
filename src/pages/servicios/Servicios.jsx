import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSearchDollar } from "react-icons/fa";
import { FaChartLine  } from "react-icons/fa";
import { FaWalking  } from "react-icons/fa";
export const Servicios = ()=>{
    return(
        <>
        <h1 className="text-center text-white pt-3">Nuestros servicios</h1>
        <h6 className="text-center text-white">Nuestros Servicios abarcan todos los campos de la evaluaci&oacute;n de yacimientos hasta el c&aacute;lculo de reservas</h6>
        <Container className='mt-5'>
      <Row>
        <Col md={12} style={{border:'double', borderColor:'darkgray', borderRadius:'5px',margin:'5px'}}><h3 className='text-white text-center m-5'>Exploracion</h3>
        <p style={{textAlign:'center', color:'white', fontSize:'40px'}}><FaWalking /></p>
        <p className='text-center text-white'>Nuestros servicios en el campo de la exploraci&oacute;n minera abarcan tanto las etapas iniciales, generativas y concept&uacute;ales de un proyecto
          de exploraci&oacute;n como las etapas de evaluaci&oacute;n y seguimiento de proyectos. Nuestra experiencia nos permite entregar una consultor&iacute;a 
          competente y altamente calificada.
        </p>
        </Col>
        <Col md={12} style={{border:'double', borderColor:'darkgray', borderRadius:'5px', margin:'5px'}}><h3 className='text-white text-center m-3'>Control y Garantia de Calidad de los Datos</h3>
        <p style={{textAlign:'center', color:'white', fontSize:'40px'}}><FaSearchDollar/></p>
        <p className='text-white text-center mt-5'>Asegurar la calidad de los datos es clave para garantizar confianza en los resultados del modelamiento geol&oacute;gico, estimaci&oacute;n de recursos. En ABZU guiamos el proceso de muestreo y realizamos procedimientos integrales
        de QA/QC de perforaci&oacute;n, muestreo, geolog&iacute;a, laboratorio y base de dato.
         </p>
        </Col>
        <Col md={12} style={{border:'double', borderColor:'darkgray', borderRadius:'5px',margin:'5px'}}><h3 className='text-white text-center m-4'>Estrategia y Gestion de Proyectos </h3>
        <p style={{textAlign:'center', color:'white', fontSize:'40px'}}><FaChartLine /></p>
        <p className='text-white text-center mt-5'>Contamos con personal de experiencia en asesorar en la toma de decisiones estrat&eacute;gicas, aportando valor, sentido com&uacute;n y soluciones
          eficientes explicadas con sencillez y transparencia.
        </p>
        </Col>
      </Row>
    </Container>
        </>
    )
}