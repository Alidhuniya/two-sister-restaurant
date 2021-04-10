import React, { Fragment } from "react";
import {NavbarContainer} from "./components/reuse/NavbarContainer";
import {Googlemap} from "./components/reuse/Googlemap";
import {Fbots} from "./components/reuse/Fbots";

 export const  App = () => {
  return (
    <Fragment>
     <div>
       {/* <NavbarContainer /> */}
      {/* <Googlemap /> */}
      <Fbots />
     </div>
    </Fragment>
  )
}
