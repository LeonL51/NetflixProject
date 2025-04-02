import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home 
      </div>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/85z53bAebsI?autoplay=1&enablejsapi=1"
        width="640" // You can adjust these dimensions as needed
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
