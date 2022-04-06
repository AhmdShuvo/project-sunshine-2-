import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const {user,LogOUt,setUser}=useAuth();

  

    return (
        <header>
           <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand className='text-light' href="/">TourSpot</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink className="navbar-brand text-light  " to="/">Home</NavLink>
        <NavLink className="navbar-brand text-light" to="places">places</NavLink>
        <NavLink className="navbar-brand text-light" to="events">Events</NavLink>
        
       
        {user.email?<NavLink className="navbar-brand text-light" to={`/order/${user.email}`}>WhiteList</NavLink>:<h1></h1>}
        {user.email? <NavLink className="navbar-brand  text-light" to="/delete">Manage</NavLink>:<h1></h1>}
        <NavLink className="navbar-brand text-light" to="/about">About US</NavLink>
       {user.email && <NavLink className="navbar-brand  text-light" to="/upload">upload</NavLink>}
       { !user.email?<NavLink className="navbar-brand text-light" to="Login">Log In</NavLink>:<Link 
        onClick={LogOUt}
       className="navbar-brand text-light" to="signUp">Log Out</Link>}
      
      </Nav>
      {user.email && <div><h4 className="text-light">  {user.displayName} </h4>
      </div>}
   
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button  className="btn-dark px-3 text-light" variant="outline-success">Search </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
};

export default Header;