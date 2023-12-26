import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Scroll from './components/Scroll';
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import NavBar from './components/Navbar';


function App() {
 

  return (
    <Router>
      <div>
        <NavBar /> 
        <Scroll />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
