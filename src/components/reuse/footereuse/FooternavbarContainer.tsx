import React, {useState} from "react";
import {Footernav} from "./Footernav";
import {useNavbarApi} from "./../../customHooks/Naveffect";


export const FooternavbarContainer = () => {
    const [nav, setNav] = useState(null);
    useNavbarApi(setNav);
    if (!nav) return <span>loading..........</span>
//    console.log(nav)
    return (
        <div>
           
             {/* <Navbar nav= {nav} /> */}
             <Footernav nav = {nav} />
        </div>
      
    )

}