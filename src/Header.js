import React from 'react'
import "./Header.css";
import {MdPerson} from "react-icons/md";
import {MdForum} from "react-icons/md";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className='header'>

    <IconButton className="header_person">
            <MdPerson fontSize="larger" />
    </IconButton>

      <IconButton>
      <img
      className= "header_logo" 
      src="../../tinder-logo.png" alt =""
      />
    </IconButton>

    <IconButton className="header_forum">
      <MdForum fontsize="large"  />
      </IconButton>
      
    </div>
  );
}

export default Header;