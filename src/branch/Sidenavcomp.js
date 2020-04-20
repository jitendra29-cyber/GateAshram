import React from 'react';
import './Sidenavcomp.css';

const Sidenavcomp = (props) => {
    return <div className="maindiv">
               <a href="">  {props.navitem} </a>  
    </div>
}

export default Sidenavcomp;