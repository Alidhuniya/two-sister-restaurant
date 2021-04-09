import React, {useState, useEffect, Fragment} from "react";
import { Client } from "../../contentful/Client";
import {Navbar} from "./Navbarview";

export const NavbarContainer = () => {
    const [nav, setNav] = useState(null);
    
    useEffect( () => {
        Client.getEntries({
            content_type: 'resNavbar'
          })
          .then((response) => 
          {
            //   console.log(response.items)
              setNav(response.items)
              
          })
          .catch(console.error)
    }, [], );
    if (!nav) return <span>loading..........</span>
//    console.log(nav)
    return (
        <div>
           
             <Navbar nav= {nav} />
             {/* <h1>{nav&& nav[0].fields.navtext}</h1> */}
           
        </div>
      
    )

}