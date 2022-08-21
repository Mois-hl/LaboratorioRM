import { Route, Routes, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import './App.css';

const About = ({ nombre }) => <h3 style={{ textAlign: 'center', marginTop: 50 }}>{nombre}</h3>;

function App() {
  const location = useLocation();
  return (
    <div>
      { location.pathname !== '/' && <NavBar /> }
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/seminario' element={<About nombre='Página seminario'/>} />
        <Route path='/reconocimientos' element={<About nombre='Página reconocimientos'/>} />
        <Route path='/proyectos' element={<About nombre='Página proyectos' />} />
        <Route path='/alumnos' element={<About nombre='Página alumnos'/>} />
        <Route path='/publicaciones' element={<About nombre='Página publicaciones'/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
