import "./App.scss";
import { BoomBox } from "./components/boombox";

//Imports
import video from "./assets/synthCityBg.mp4";

function App() {

  return (
    <div className="App">
      <video
        className="fullscreen-video"
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source src={video} type="video/mp4" />
      </video>

      <BoomBox />
    </div>
  );
}

export default App;
