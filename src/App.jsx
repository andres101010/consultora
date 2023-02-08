import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Galeria } from './pages/galeria/Galeria'
import { Nosotros } from './pages/nosotros/Nosotros'
import { Proyectos } from './pages/proyectos/Proyectos'
import { Servicios } from './pages/servicios/Servicios'
import { Home } from './pages/home/Home'
import { Contantos } from './pages/constactos/Contactos'
import { Navegador } from './component/Navbar'
import { Mision } from './pages/mision/Mision'

function App() {
  

  return (
    <div className="App">      
      <BrowserRouter>
      <Navegador />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/nosotros' element={<Nosotros />}></Route>
            <Route path='/servicios' element={<Servicios />}></Route>
            <Route path='/galeria' element={<Galeria />}></Route>
            <Route path='/proyectos' element={<Proyectos />}></Route>
            <Route path='/contactos' element={<Contantos />}></Route>
            <Route path='/mision' element={<Mision />}></Route>
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
