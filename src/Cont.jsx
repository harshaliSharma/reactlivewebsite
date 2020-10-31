import React  from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route,Redirect} from "react-router-dom";
import About from './About';
import Contact from './Contact';
//import footer from './footer';
import Services from './Services';
import Home from './Home';
import Menu from "./Menu";
//import Error from './Error';


const Cont =()=>
{

   
  return(
      <>
      <Menu/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/service" component={Services}/>
      <Route exact path="/contact" component={Contact}/>

<Redirect to="/" />
    
      </Switch>
<footer/>
</>
    );
};

export default Cont;