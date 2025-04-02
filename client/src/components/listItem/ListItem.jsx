import React, { useState } from "react";
import "./listItem.scss";
import { PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  // Correct YouTube embed URL for using in an iframe
  const trailer = "https://www.youtube.com/embed/85z53bAebsI?autoplay=1&enablejsapi=1"; // Updated URL with autoplay and mute parameters

  return (
    <div className="listItem"
      style={{ left: isHovered ? `${index * 225 - 50}px` : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img
        src="https://resizing.flixster.com/DNIVF3D1se7dIGGY9GoqAU0pjpo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8630071_b_h8_bc.jpg"
        alt="Movie thumbnail"
      />
      {isHovered && (
        <>
          <iframe
            src={trailer}
            allow="autoplay; encrypted-media"
          />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
