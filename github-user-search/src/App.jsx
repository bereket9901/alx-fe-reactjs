import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Service from '../src/services'
import Components from '../src/components '
import Home from '../src/components/Home';
import About from '../src/components/About';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
