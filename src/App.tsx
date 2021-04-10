import React, { Fragment } from "react";
import {NavbarContainer} from "./components/reuse/NavbarContainer";
import {Socialicons} from "./components/reuse/footereuse/Socialicons";



 export const  App = () => {
  return (
    <Fragment>
     <div>
       {/* <NavbarContainer /> */}
       <Socialicons />
     </div>
    </Fragment>
  )
}
