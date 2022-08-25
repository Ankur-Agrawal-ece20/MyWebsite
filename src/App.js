import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import ContactForm from './pages/Contact';
import Project from './pages/Projects';
import About from './pages/About';
import Footer from './components/footer/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<><Home/><About/><Project/><Footer mode={"relative"}/></>} />
        <Route path="/about" element={<><About/><Footer mode={"fixed"}/></>} />
        <Route path="/projects" element={<><Project/><Footer mode={"fixed"}/></>} />
        <Route path="/contacts" element={<><ContactForm/><Footer mode={"fixed"}/></>} />
        </Routes>  
      </Router>
    </>
  );
}

export default App;
