import {useEffect} from "react";
import { Client } from "./../../contentful/Client";


export const useNavbarApi = (setNav) => {
    useEffect( () => {
        Client.getEntries({
            content_type: 'resNavbar'
          })
          .then((response) => 
          {
              console.log(response.items)
              setNav(response.items)
              
          })
          .catch(console.error)
    }, [], );
   
}


