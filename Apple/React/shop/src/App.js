import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import date from './date.js';

function App() {
  let [shoes] = useState(date);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" ></div>
      <div className="container">
        <div className="row">
        {
        shoes.map(function(v,i){
          return <Component shoes={v} i={i} key={i}></Component>
          })
        }
        </div>
      </div>
    </div>
  );
}

function Component(props){
  return(
  <div className="col-md-4">
    <img src={process.env.PUBLIC_URL + '/img/shoes'+(props.i+1)+'.jpg'} width="80%"/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
  </div>
  )
}

export default App;