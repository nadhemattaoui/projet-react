import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Products from './Products';
import Cart from './Cart';
import {Routes,Route,Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'

function App() {

  const articleNumber= useSelector(state=>state.shop.length)

  return (
    
    <div className="App">
     
  
      <Navbar bg="primary" variant="dark">
        <Container className="container">
          <LinkContainer to="home" style={{color:"white" , fontWeight:"800"}}><Navbar.Brand  >EXIST</Navbar.Brand></LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="home"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="products"><Nav.Link >Products</Nav.Link></LinkContainer>
            <LinkContainer to="cart"><Nav.Link >Cart  {articleNumber !==0 && 
            <span className="badge bg-secondary">{articleNumber}</span>}</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    
 
    
   
   <Routes>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='products' element={<Products></Products>}></Route>
<Route path='cart' element={<Cart></Cart>}></Route>
</Routes>
</div>
  );
}

export default App;