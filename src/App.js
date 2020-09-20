import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rooms from './rooms';
import NavBar from './Navbar' ;
import {Container, Row, Col} from 'react-bootstrap' ;

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookRoom from './bookroom';
import RoomSetup from './roomsetup';
import FoodAndDrinks from './foodanddrinks';

function App() {
  return (
    <Router>
      <Container >
       <Row className='sticky-top' ><Col Style="padding:0px" ><NavBar/></Col></Row>
       <Switch>
        <Route path="/rooms" exact>
          <Rooms/>
        </Route>
        <Route path="/bookroom">
          <BookRoom/> 
        </Route>
        <Route path="/roomsetup">
          <RoomSetup/>
        </Route>
        <Route path="/foodanddrinks">
          <FoodAndDrinks/>
        </Route>
        <Route path="/" exact>
          <Rooms/>
        </Route>
      </Switch>
        
         {/* <Rooms/>    
         <BookRoom/> 
         <RoomSetup/> 
        <FoodAndDrinks/> */}
    </Container>
    </Router>
    
    
  );
}

export default App;
