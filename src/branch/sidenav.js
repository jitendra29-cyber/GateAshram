import React from 'react';
import './branch.css';
import 'tachyons';
import Sidenavcomp from './Sidenavcomp';

const sidenav = () => {
    return <div className="sidenav">
               
               <Sidenavcomp navitem="Home" icon="home.svg"></Sidenavcomp>
               <Sidenavcomp navitem="Subjects"></Sidenavcomp>
               <Sidenavcomp navitem="Branch"></Sidenavcomp>
               <Sidenavcomp navitem="Gate Years"></Sidenavcomp>
               <Sidenavcomp navitem="Success Stories"></Sidenavcomp>
               <Sidenavcomp navitem="Testimonals"></Sidenavcomp>
               <Sidenavcomp navitem="Result"></Sidenavcomp>
               <Sidenavcomp navitem="Q&A"></Sidenavcomp>
               <Sidenavcomp navitem="About"></Sidenavcomp>
        </div>

    
}

export default sidenav;