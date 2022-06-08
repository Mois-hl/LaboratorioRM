import { Route, Routes, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import './App.css';

const About = ({ nombre }) => <h1>{nombre}</h1>;

function App() {
  const location = useLocation();
  return (
    <div>
      { location.pathname !== '/' && <NavBar /> }
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/seminario' element={<About nombre='seminario'/>} />
        <Route path='/reconocimientos' element={<About nombre='reconocimientos'/>} />
        <Route path='/proyectos' element={<About nombre='proyectos' />} />
        <Route path='/alumnos' element={<About nombre='alumnos'/>} />
        <Route path='/publicaciones' element={<About nombre='publicaciones'/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
