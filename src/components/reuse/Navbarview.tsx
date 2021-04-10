import React from "react";
import "./../../sass/2-components/_navbarview.scss";
    export const Navbar = (props) => {
     const nav= props.nav;
    //  console.log(nav);
   const list = nav.slice(0).reverse().map((listItems) => 
   <li className="navbar__li" key = {listItems.sys.id}>
     <a href="#" className="a">
     <img  className="nav__img" src={listItems.fields.navimg.fields.file.url} alt="nav-logo" /> 
       <h1 className="nav__h1">{listItems.fields.navtext}</h1>
       </a>
       </li>

       
       
   )
    
    
     return (
         <header className="header">
           <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
             {/* <nav className="navbar__block"> */}
             <ul className="menu">
                 {list}
         </ul>
        {/* </nav> */}
         </header>
     );
 }

