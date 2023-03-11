import { BrowserRouter, Route, Routes} from "react-router-dom";
import $ from "jquery";
import './App.css';
import Shiny from './component/legendary.js';
import AllGen from './component/allGen.js';
import Home from './component/home.js';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sa54LEn76V4Lng" element={<AllGen />} />
        <Route path="/sa54LEn76V4Lnc" element={<Shiny />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
