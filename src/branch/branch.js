import React from 'react';
import './branch.css';
import 'tachyons';
import Sidenav from './sidenav';



const branch = () => {
    return <div className="style">
        <div className="header">
            <h2 className="fl w-50"><a href=""> GATEASHRAM|</a></h2>
            <h2 className="fl w-50 tr"><a href=""> login </a></h2>
        </div>

        {/* <br></br> */}
   <div>
   <Sidenav></Sidenav>

   </div>
               
    </div>
}



export default branch;