import React from "react";
import "./../../sass/2-components/_navbarview.scss";
    export const Navbar = (props) => {
     const nav= props.nav;
    //  console.log(nav);
   const list = nav.slice(0).reverse().map((listItems) => 
   <div key = {listItems.sys.id} className="nav">
     <img  className="nav__img" src={listItems.fields.navimg.fields.file.url} alt="nav-logo" /> 
       <h1 className="nav__h1">{listItems.fields.navtext}</h1>
       </div>
   )
    
    
     return (
         <div>
         {list}
         </div>
     );
 }