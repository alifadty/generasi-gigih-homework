import "./App.css"
import Header from "./components/Header"
import Button from "./components/Button"
import Track from "./components/Track"
import Image from "./components/Image"
import Data from "./constants/TrackData"

function App() {
  return (
    <div className="App">
      <div className="containers">
        <div className="head">
          <Header/>
        </div>
        <div className="body">
          <Image src={Data.album.images[1].url} alt={Data.album.id} />
          <Track/>
          <Button/>
        </div>
    </div>
    </div>
  );
}

export default App;
