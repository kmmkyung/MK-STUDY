import React from "react";
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import SearchBar from './SearchBar';


const NavigationBar = () =>{
  return(
    <nav className="Navbar">
      <LeftNav></LeftNav>
      <SearchBar></SearchBar>
      <RightNav></RightNav>
    </nav>
  )
}

export default NavigationBar