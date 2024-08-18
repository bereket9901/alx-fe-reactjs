import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Services from './component/Services'
import Navbar from './component/Navbar'
function App() {
  return (
    <Routes path="/" element={<Navbar />} >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services />} />
    </Routes>
  );
}

export default App;
