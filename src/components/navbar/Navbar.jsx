import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <div className='m-auto colorr ' >
      <Navbar expand="lg"  >
        <Container className='m-auto'>
          <Link to ="/products" className=" text-decoration-none  text-white fs-2 ">Products</Link>
          <Link to ="/resturent" className=" text-decoration-none text-white  fs-2 ">Resturent</Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;