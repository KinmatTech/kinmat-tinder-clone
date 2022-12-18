import React from 'react';
import './SwipeButtons.css';
import {MdOutlineReplay} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {MdStarRate} from "react-icons/md";
import {MdFavorite} from "react-icons/md";
import {MdFlashOn} from "react-icons/md";
import IconButton from "@mui/material/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
         <IconButton className="swipeButtons_repeat">
        <MdOutlineReplay fontsize = "large"/>
        </IconButton>
        <IconButton className="swipeButtons_left">
         <AiOutlineClose fontsize = "large" />
         </IconButton>
         <IconButton className="swipeButtons_star">
         <MdStarRate fontsize = "large" />
         </IconButton>
         <IconButton className="swipeButtons_right">
         <MdFavorite fontsize = "large" />
         </IconButton>
         <IconButton className="swipeButtons_lightning">
        <MdFlashOn fontsize = "large" />
        </IconButton>
    </div>
  )
}

export default SwipeButtons