import React from "react";
import {IoMenu} from 'react-icons/io5'
import { Link } from "react-router-dom";
import imgUrl from '../../../assets/logo.png'
const LeftNav = () =>{
  return(
    <div className="menu-logo">
      <button className="icon-container burgerMenu">
        <IoMenu size={25}></IoMenu>
      </button>
      <div className="logo-container">
        <Link>
          <img src={imgUrl} alt="youtube logo"></img>
        </Link>
      </div>
    </div>
  )
}

export default LeftNav