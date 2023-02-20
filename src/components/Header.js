import HeaderCSS from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={HeaderCSS.mainContainer}>
        <img
          className={HeaderCSS.trollFace}
          src="/images/Troll-Face-Meme-PNG.png"
        ></img>
        <div className={HeaderCSS.textContainer}>
          <h2>Meme Generator</h2>
          <p>React skills - Project 3</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
