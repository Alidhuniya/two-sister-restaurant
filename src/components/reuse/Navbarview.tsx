import React from "react";

    export const Navbar = (props) => {
     const nav= props.nav;
     console.log(nav);
   const list = nav.map((listItems) => 
       <li>{listItems.fields.navtext}</li>
   )
    
    
     return (
         <div>
         <h1>{list}</h1>
         </div>
     );
 }