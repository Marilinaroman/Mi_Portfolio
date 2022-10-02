import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Inicio from './componentes/Inicio/Inicio';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer'
import Proyectos from './componentes/Proyectos/Proyectos';
import SobreMi from './componentes/SobreMi/SobreMi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/SobreMi' element={<SobreMi/>}/>
        <Route path='MisProyectos' element={<Proyectos/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
