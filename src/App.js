import { BrowserRouter, Route, Routes} from "react-router-dom";
import $ from "jquery";
import './App.css';
import AllGen from './component/allGen.js';
import Legendary from './component/legendary.js';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<CreatePost />} />
        <Route path="/" element={<Pokedex />} />
        <Route path="/sa54LEn76V4Lng" element={<AllGen />} />
        <Route path="/MY89s2Dv54zsuF" element={<Legendary />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
