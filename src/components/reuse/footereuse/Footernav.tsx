import React from 'react';
import "./../../../sass/2-components/_footernav.scss";

export const Footernav = (props) => {
    const nav= props.nav;
   //  console.log(nav);
  const list = nav.slice(0).reverse().map((listItems) => 
  <li className="footernav__li" key = {listItems.sys.id}>
    <a href="#" className="a"> 
      <h1 className="footernav__h1">{listItems.fields.navtext}</h1>
      </a>
      </li>

      
      
  )
   
   
    return (
        <footer className="footernav">
            <ul className="footernav__ul">
                {list}
        </ul>
       {/* </nav> */}
        </footer>
    );
}


