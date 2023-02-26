import { useState } from "react";
import MemeCSS from "./Meme.module.css";
import memesData from "./memesData";

function Meme(props) {
  let [currentImage, setCurrentImage] = useState("");

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * memesData.data.memes.length);
    const url = memesData.data.memes[randomNumber].url;

    function getMemeImage() {
      setCurrentImage(url);
      console.log(currentImage);
    }
    getMemeImage();
  }

  return (
    <main>
      <div className={MemeCSS.formContainer}>
        <div>
          <div>
            <input
              className={MemeCSS.firstWord}
              type="text"
              id="firstWord"
              name="firstWord"
              placeholder="Top text"
            ></input>
            <input
              className={MemeCSS.secondWord}
              type="text"
              id="secondWord"
              name="secondWord"
              placeholder="Bottom text"
            ></input>
          </div>
          <div>
            <input
              onClick={handleClick}
              className={MemeCSS.submit}
              type="submit"
              value="Get a new meme image 🎁"
            ></input>
          </div>
          <div className="img-container">
            <img className="meme-image" src={currentImage} width="539"></img>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Meme;
