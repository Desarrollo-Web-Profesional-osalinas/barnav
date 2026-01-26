import Navbar from './componentes/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/secciones/Home'
import About from './componentes/secciones/About'
import Cursos from './componentes/secciones/Cursos'
import Login from './componentes/secciones/Login' 
import Blog from './componentes/secciones/Blog' 
import Contacto from './componentes/secciones/Contacto' 

const App = () => {
 return (
 <div className='overflow-x-hidden'>
 <BrowserRouter>
    <Navbar />
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>

 </BrowserRouter>
 </div>
 )
}
export default App