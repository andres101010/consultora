import Carousel from 'react-bootstrap/Carousel';

export const Galeria = ()=>{
    return(
        <div className='container-galeria'>
            <h1 className='text-center text-white m-4'>Galeria</h1>
            <Carousel className='carousel'>
      <Carousel.Item interval={1000} className="carousel-item">
        <img
          className="d-block w-100 "
          src="src\assets\img\Explo-0.jpg"
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
          src="src\assets\img\IMG-20160908-WA007_edit.jpg"
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
          src="src\assets\img\IMG-20160908-WA018.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Presentacion de Proyecto</h3>
          <p>
            Mostrando documentacion .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\img\explo-1.jpg"
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
          src="src\assets\img\explo-2.JPG"
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
          src="src\assets\img\explo-3.JPG"
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
          src="src\assets\img\explo-4 (2).JPG"
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
          src="src\assets\img\explo-4.JPG"
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
          src="src\assets\img\mac-osx-sierra-lu-1920x1080.jpg"
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