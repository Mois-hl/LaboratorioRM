import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

const Home = () => <h1>Home</h1>
const SearchPage = () => <h1>SearchPage</h1>;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Centro de Investigación de Computación</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>SearchPage</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
