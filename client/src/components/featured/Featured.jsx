import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

export default function Featured({ type }) {
  return (
    <div className="featured">
        {type && (
          <div className="category">
              <span>{type === "movie" ? "Movies" : "Series"}</span>
              <select name="genre" id="genre">
                  <option>Genre</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="crime">Crime</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="historical">Historical</option>
                  <option value="horror">Horror</option>
                  <option value="romance">Romance</option>
                  <option value="sci-fi">Sci-fi</option>
                  <option value="thriller">Thriller</option>
                  <option value="western">Western</option>
                  <option value="animation">Animation</option>
                  <option value="drama">Drama</option>
                  <option value="documentary">Documentary</option>
              </select>
          </div>
        )}
      <img
        src="https://api.time.com/wp-content/uploads/2016/03/wonder-woman-gal-gadot-batman-v-superman-warner-bros-dc-comics-superheros.jpg"
        alt="" 
      />
      <div className="info">
        <img 
            src="https://occ-0-114-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeinrAhu6hH_wsqJnBfgL9WbRISXNiacO14G00O2rRc0vblhBRuXT9Vvp6J_dJvZD476xE7GEATKORvi0cQt25MZEDFFabloqxYwF77EwOkP.png?r=64b"
            alt=""
        />
        <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            adipisci repellendus eum quasi illo, velit numquam, maxime tempora
            sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
            temporibus eum earum?
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow />
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined />
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
}