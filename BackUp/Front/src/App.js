import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
//import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
//import logo from './img/logo.png'
import LogIn from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import SuitableJob from './Components/Suitable';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNav from './Components/NavMenu';

function App() {
  
  return (
    <Router>

      <div className="App">
        <MainNav />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route  path='/Login' exact element={<LogIn />} />
          <Route path='/Register' exact element={<Register />}/>
          <Route path='/Contact' exact element={<Contact />} />
          <Route path='/SuitableJob' exact element={<SuitableJob />} />
        </Routes>

        <div className='content'>
          
        </div>

        <Footer />

      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;
