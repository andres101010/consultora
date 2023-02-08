import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Nosotros = ()=>{
    return(
        <div className="container-nosotros text-center text-white mt-5">
            <h1 className='mb-4'>Qui&eacute;nes Somos</h1>
            <Card className='card-nosotros '>
             <Card.Img variant="top" src="\src\assets\img\bg.jpg" />
              <Card.Body>
              <Card.Text className='text-black'>
                Somos una consultora independiente que cuenta con un grupo de profesionales que poseen una exhaustiva experiencia en la revisión de datos de aseguramiento de la calidad en todas las etapas de los proyectos. Los geólogos de ABZU combinan sus competencias en la interpretación estructural  y geológica de los yacimientos minerales  con la aplicación de nuevas e innovadoras tecnologías, para el modelamiento en 3D, y de los métodos geoestadísticos para determinar la distribución de los commodities.
                Ayudamos empresas de exploración minera a delinear prospectos eficientemente, aumentando las posibilidades de descubrir yacimientos minerales y disminuyendo el riesgo asociado con la exploración minera.
                </Card.Text>
        <Link to={'/mision'}><Button variant="primary">Mision y Objetivos</Button></Link>
      </Card.Body>
    </Card>
            
        </div>
    )
}