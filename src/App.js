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
        <Route path="/test" render={(props) => <CreatePost />} />
        <Route path="/" exact  render={(props) => <Pokedex />} />
        <Route path="/sa54LEn76V4Lng" render={(props) => <FirstGen />} />
        <Route path="/DPbwt8A27bi26V" render={(props) => <SecondGen />} />
        <Route path="/u7fNSv6GfBg328" render={(props) => <ThirdGen />} />
        <Route path="/E638Q8Xyvf3Tfy" render={(props) => <FourthGen />} />
        <Route path="/uT6V5J8b7eHx4n" render={(props) => <FifthGen />} />
        <Route path="/RC5dm9zwcW2G55" render={(props) => <SixthGen />} />
        <Route path="/d76C6Xx9MaVnc9" render={(props) => <EightGen />} />
        <Route path="/6NFptvb6V74w5J" render={(props) => <NinthGen />} />
        <Route path="/y5d3w62KQiLyP3" render={(props) => <AllGen />} />
        <Route path="/26tQ3JasgSK44y" render={(props) => <Legendary />} />
        <Route path="/MY89s2Dv54zsuF" render={(props) => <Pokedex />} />
    </Router>
    </>
  );
}

export default App;
