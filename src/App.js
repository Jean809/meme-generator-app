import Header from "./components/Header";
import Meme from "./components/Meme";
import memesData from "./components/memesData";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Meme />
      </div>
    </div>
  );
}

export default App;
