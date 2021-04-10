import React, { Fragment } from "react";
import {NavbarContainer} from "./components/reuse/NavbarContainer";
import {Googlemap} from "./components/reuse/Googlemap";


 export const  App = () => {
  return (
    <Fragment>
     <div>
       {/* <NavbarContainer /> */}
      <Googlemap />
     </div>
    </Fragment>
  )
}
