import React from 'react' ;
import {Navbar,NavDropdown, Nav } from 'react-bootstrap' ;
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../logo.svg' ;

const NavBar = () => {

    const booking = useSelector( storeState => storeState.bookingState ) ;


    const navDropdown = ["Step 1 : Meeting Rooms","Step 2 : Book Room","Step 3 : Room Setup","Step 4 : Food & Drinks","Step 5 : Checkout","Step 6 : Confirmation" ] ;
    const routesObj = {"/rooms":0, "/bookroom":1 ,"/roomsetup":2, "/foodanddrinks":3, "/checkout":4, "/confirmation":5, "/": 0} ;
    const location = useLocation() ;
    console.log(location) ;

return (
    <Navbar bg="light" className ="border border-dark"  >
        <Navbar.Brand className = "border border-dark" href="#home">
            <img
                height = "25px"
                width = "40px"
                src={logo}
            />
        </Navbar.Brand>
       
            <Nav className="mr-auto">
            
            <NavDropdown title={navDropdown[routesObj[location.pathname]]} className = "border border-dark" >
                <NavDropdown.Item  ><Link to="/rooms">{navDropdown[0]}</Link></NavDropdown.Item>
                <NavDropdown.Item disabled = {!( "date" in booking)}><Link to="/bookroom">{navDropdown[1]}</Link></NavDropdown.Item>
                <NavDropdown.Item disabled = {!( "layoutId" in booking)}><Link to="/roomsetup">{navDropdown[2]}</Link></NavDropdown.Item>
                <NavDropdown.Item disabled = {!("food" in booking)}><Link to="/foodanddrinks">{navDropdown[3]}</Link></NavDropdown.Item>
                <NavDropdown.Item disabled = {!( "customer" in booking)}><Link to="">{navDropdown[4]}</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to="">{navDropdown[5]}</Link></NavDropdown.Item>
            </NavDropdown>
            </Nav>

            
            
       
    </Navbar>
) ;
}

export default NavBar ;