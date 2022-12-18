import React from 'react'
import "./Header.css";
import {BsPersonSquare} from "react-icons/bs";
import {MdForum} from "react-icons/md";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className='header'>

    <IconButton size="large">
            <BsPersonSquare fontSize="Large" 
            className="header_Icon" />
    </IconButton>

      <IconButton size="large">
      <img
      className= "header_logo" 
      src="../../tinder-logo.png" alt =""
      />
    </IconButton>

    <IconButton size="large">
      <MdForum fontsize="large" 
      className= "header_icon" />
      </IconButton>
      
    </div>
  );
}

export default Header;