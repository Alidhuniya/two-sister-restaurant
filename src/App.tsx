import React, { Fragment } from "react";
import {NavbarContainer} from "./components/reuse/NavbarContainer";
import {Googlemap} from "./components/reuse/Googlemap";
import {Fbots} from "./components/reuse/Fbots";
import {Footer} from "./components/reuse/footereuse/Footer";
// import {Footernav} from "./components/reuse/footereuse/Footernav";



 export const  App = () => {
  return (
    <Fragment>
     <div>
     
       {/* <NavbarContainer /> */}
      {/* <Googlemap /> */}
      <Footer />
      {/* <Fbots /> */}
     </div>
    </Fragment>
  )
}
