import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import $ from "jquery";
import './App.css';
import FirstGen from './component/firstGen.js';
import SecondGen from './component/secondGen.js';
import ThirdGen from './component/thirdGen.js';
import FourthGen from './component/fourthGen.js';
import FifthGen from './component/fifthGen.js';
import SixthGen from './component/sixthGen.js';
import SeventhGen from './component/seventhGen.js';
import EightGen from './component/eightGen.js';
import NinthGen from './component/ninthGen.js';
import AllGen from './component/allGen.js';
import Legendary from './component/legendary.js';
import Pokedex from './component/pokedex.js';
import CreatePost from './component/CreatePost.js';

function App() {
  return(
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/test">Create Post</a>
        </div>
      </div>
    <Router>
      <Routes>
        <Route path="/test" element={<CreatePost />} />
        <Route path="/" element={<Pokedex />} />
        <Route path="/sa54LEn76V4Lng" element={<FirstGen />} />
        <Route path="/DPbwt8A27bi26V" element={<SecondGen />} />
        <Route path="/u7fNSv6GfBg328" element={<ThirdGen />} />
        <Route path="/E638Q8Xyvf3Tfy" element={<FourthGen />} />
        <Route path="/uT6V5J8b7eHx4n" element={<FifthGen />} />
        <Route path="/RC5dm9zwcW2G55" element={<SixthGen />} />
        <Route path="/d76C6Xx9MaVnc9" element={<SeventhGen />} />
        <Route path="/6NFptvb6V74w5J" element={<EightGen />} />
        <Route path="/y5d3w62KQiLyP3" element={<NinthGen />} />
        <Route path="/26tQ3JasgSK44y" element={<AllGen />} />
        <Route path="/MY89s2Dv54zsuF" element={<Legendary />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
