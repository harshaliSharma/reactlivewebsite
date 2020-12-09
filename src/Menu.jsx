import React from "react";
import {NavLink} from 'react-router-dom';

const Menu=()=>
{

    return(
<>
<div className="container-fluid nav_bg">
    <div className='row'>
        <div className="col-10 mx-auto">

  
<nav className="navbar navbar-expand-lg navbar-light bg-light">
 <NavLink className="navbar-brand" to="/">Harshali</NavLink>
  

  <div >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link"  activeClassName="menu_active" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
     
      <li className="nav-item">
       <NavLink className="nav-link"  activeClassName="menu_active" to="/service">Services </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link"  activeClassName="menu_active" to="/about">About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link"  activeClassName="menu_active" to="/contact">Contact</NavLink>
      </li>
     
      
    </ul>
   
  </div>
</nav>
      </div>

</div>
</div>

</>
    );
};


export default Menu;
