import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateLoading } from '../store';

export default function Header() {
  const navigate = useNavigate();
  const dispach = useDispatch();
  const loading = useSelector( (state => state.loading));
  const handleSubmit = e => {
    console.log('loading');
    e.preventDefault();
    dispach(updateLoading(false));
    navigate("/");
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='logo' onClick={()=> navigate("/")}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          { 
            loading ? (
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end flex-grow-1 pe-2">
                <Button className='button' variant="secondary" onClick={()=> navigate("/add")}>Manager les produits</Button>
                <Button className='button' variant="secondary" onClick={handleSubmit}>Log out</Button>
              </Navbar.Collapse>
              )
              :
              (
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end flex-grow-1 pe-2">
                <Button className='button' variant="secondary" onClick={()=> navigate("/login")}>Log in</Button>
                <Button className='button' variant="success" onClick={()=> navigate("/register")}>Sign up</Button>
              </Navbar.Collapse>
              )          
          }
       
      </Container>
    </Navbar>
  )
}
