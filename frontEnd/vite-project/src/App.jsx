import { useState, useEffect } from "react";
import video from "./assets/synthCityBg.mp4";
import { BoomBox } from "./components/boombox.jsx";
import FacialRecModal from "./components/FacialRec/FacialRecModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
      console.log(isOpen)
    }, 1000);
  }, []);

  return (
    <div className="App">
      <video className="fullscreen-video" autoPlay muted loop preload="auto">
        <source src={video} type="video/mp4" />
      </video>

      <BoomBox />
      <FacialRecModal open={isOpen} />
    </div>
  );
}

export default App;
