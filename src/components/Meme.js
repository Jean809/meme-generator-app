import MemeCSS from "./Meme.module.css";

function Meme() {
  return (
    <main>
      <form className={MemeCSS.formContainer}>
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
              className={MemeCSS.submit}
              type="submit"
              value="Get a new meme image 🎁"
            ></input>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Meme;
