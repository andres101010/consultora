import Carousel from 'react-bootstrap/Carousel';
import explo0 from '/src/assets/img/Explo-0.jpg'
import imgreunion2 from '/src/assets/img/imgreunion2.jpg'
import explo1 from '/src/assets/img/explo-1.jpg'
import dsc014 from '/src/assets/img/dsc01473.jpg'
import explo2 from '/src/assets/img/explo-2.jpg'
import explo3 from '/src/assets/img/explo-3.jpg'
import explo4 from '/src/assets/img/explo-4.jpg'
import macsierra from '/src/assets/img/mac-sierra.jpg'
import dsc01465 from '/src/assets/img/dsc01465.jpg'


export const Galeria = ()=>{
    return(
        <div className='container-galeria'>
            <h1 className='text-center text-white m-4'>Galeria</h1>
            <Carousel className='carousel'>
      <Carousel.Item interval={1000} className="carousel-item">
        <img
          className="d-block w-100 "
          src={explo0}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Exploracion</h3>
          <p>Favio Morales.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={imgreunion2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Reunion de ejecutivos</h3>
          <p>ABZU.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={explo1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Presentacion de Proyecto</h3>
          <p>
            Iniciando Exploracion .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dsc014}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Exploracion</h3>
          <p>
            Nuestros trabajadores marcando la mejor ruta.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={explo2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Foto capturada en una expedicion</h3>
          <p>
            paisaje 1.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={explo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Foto capturada en una expedicion</h3>
          <p>
            Paisaje 2.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={explo4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>las sierras</h3>
          <p>
            Paisaje 3.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={macsierra}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>sierras 2</h3>
          <p>
            Paisaje 4.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dsc01465}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Sierra</h3>
          <p>
            Paisaje 5.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}