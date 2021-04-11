import React, {Fragment} from 'react';
import "./../../../sass/2-components/_footer.scss";
import {FooternavbarContainer} from "./FooternavbarContainer";
import {Socialicons} from "./Socialicons";


export const Footer = () => {
      return (
        <Fragment>
            
           <footer>
               <div>
                   <FooternavbarContainer />
                   <Socialicons />
               </div>
           </footer>
        </Fragment>
      )
}
