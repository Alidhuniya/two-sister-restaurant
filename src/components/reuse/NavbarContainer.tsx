import React, {useState} from "react";
import {Navbar} from "./Navbarview";
import {useNavbarApi} from "./../customHooks/Naveffect";


export const NavbarContainer = () => {
    const [nav, setNav] = useState(null);
    useNavbarApi(setNav);
    if (!nav) return <span>loading..........</span>
//    console.log(nav)
    return (
        <div>
           
             <Navbar nav= {nav} />
             {/* <Footernav nav = {nav} /> */}
        
             {/* <h1>{nav&& nav[0].fields.navtext}</h1> */}
           
        </div>
      
    )

}