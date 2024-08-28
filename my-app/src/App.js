import './App.css';
import { Link , Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

import {BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {BsYoutube} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa"


function App() {
  return (
  <div>
     <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
      <Container>
        <Navbar.Brand>
         <Link to="/" className='navbar-brand text-success fw-semibold'>Restaurant</Link>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
               <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
               <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
               <Nav.Link href='/about' className=' text-uppercase'>About</Nav.Link>
               <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>

            </Nav>
         </Navbar.Collapse>

      </Container>
     </Navbar>


     <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/menu' element={<Menu />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           </Routes>
  


           <footer className="bg-light text-dark pt-5">
    <div className="container px-5">
        <div className="row">
            <div className="col-6 col-lg-4">
                <h3 className="fw-bold">Restaurant</h3>
                <p className="pt-2">321, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="mb-2">0987654321</p>
                <p>1234567890</p>
            </div>

           
            <div className="col">
                <h4>Site Navigation</h4>
                <ul className="list-unstyled pt-2">
                    <li className="py-1"><a href='/'  className='text-decoration-none link-dark'>HOME</a></li>
                    <li className="py-1"><a href='/menu' className='text-decoration-none link-dark'>MENU</a></li>
                    <li className="py-1"><a href='/about' className='text-decoration-none link-dark'>ABOUT</a></li>
                    <li className="py-1"><a href='/contact' className='text-decoration-none link-dark'>CONTACT</a></li>
                </ul>
            </div>
            <div class="col-6 col-lg-3 text-lg-end">
                <h4>Social Media Links</h4>
                <div className="social-media pt-3">
                    <a href="#" className="text-dark fs-2 me-4"><BsTwitter /></a>
                    <a href="#" className="text-dark fs-2 me-4"><SiLinkedin /></a>
                    <a href="#" className="text-dark fs-2 me-4"><BsYoutube /></a>
                    <a href="#" className="text-dark fs-2"><FaFacebookF /></a>
                </div>
            </div>
        </div>
        <hr/>
        
    </div>
</footer>
</div>

  );
}

export default App;
