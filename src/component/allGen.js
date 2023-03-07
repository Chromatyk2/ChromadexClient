import React, {useState, useEffect, Component, useContext, useMemo} from "react";
import Axios from 'axios'

import PokeBallSvg from "./svg.jsx";
function ReactLogo () {
    return (
      <PokeBallSvg />
    );
}

function UniqueFirstGenPokemon(props) {
  const queryParameters = new URLSearchParams(window.location.search);
  const pseudo = queryParameters.get("pseudo");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [name, setName] = useState([]);
  const [isLegendary, setIsLegendary] = useState(false);
  const legendaryChance = Math.floor((Math.random() * 1) + 1);
  const randomLegendary = [144,145,146,150,151,243,244,245,249,250,251,377,378,379,380,381,382,383,384,385,386,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,638,639,640,641,642,643,644,645,646,647,648,649,716,717,718,719,720,721,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,888,889,890,891,892,893,894,895,896,897,898,905]
  const randomNumber = Math.floor((Math.random() * 905) + 1);
  if(legendaryChance == 100){
    const randomNumber = randomLegendary[Math.floor(Math.random()*randomLegendary.length)];
  }
  useEffect(() => {
   fetch("https://pokeapi.co/api/v2/pokemon/"+randomNumber)
     .then(res => res.json())
     .then(
       (result) => {
         setIsLoaded(true);
         setItems(result);
       },
       (error) => {
         setIsLoaded(true);
         setError(error);
       }
     )
 }, [])
 useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon-species/"+randomNumber+"/")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setName(result.names);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [])

  useEffect(() => {
   fetch("https://pokeapi.co/api/v2/pokemon/"+randomNumber)
     .then(res => res.json())
     .then(
       (result) => {
         setIsLoaded(true);
         setItems(result);
       },
       (error) => {
         setIsLoaded(true);
         setError(error);
       }
     )
 }, [legendaryChance != 100 && isLegendary === true])
 useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon-species/"+randomNumber+"/")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setName(result.names);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, [legendaryChance != 100 && isLegendary === true])
console.log(legendaryChance);
console.log(name);
console.log(items);
 if (error) {
   return <div>Error: {error.message}</div>;
 } else if (!isLoaded) {
   return <div></div>;
 } else {
   if(name[4] !== undefined && items.sprites !== undefined){
     const shinyOdd = Math.floor((Math.random() * 1365) + 1);
     if(shinyOdd == 1){
         Axios.post('https://chromatyk-pokemon.herokuapp.com/api/capture', {pseudo: pseudo, pkmName: name[4].name, pkmImage:items.sprites.other.home.front_shiny,pkmId:items.id, shiny:1, dateCapture:new Date()})
       return (
         <>
         <p className="pkmName">{name[4].name}<img className="shinySpark" src="https://res.cloudinary.com/shiny24/image/upload/v1669396824/pokemon/shiny_symbol_pokemon_tdxjdc.png"></img></p>
          <span className="pokemonImgSpan">
            <img className="pokemonImg" src={items.sprites.other.home.front_shiny}></img>
          </span>
        </>
       );
     }else{
         Axios.post('https://chromatyk-pokemon.herokuapp.com/api/capture', {pseudo: pseudo, pkmName: name[4].name, pkmImage:items.sprites.other.home.front_default,pkmId:items.id, shiny:0, dateCapture:new Date()})
       return (
         <>
         <p className="pkmName">{name[4].name}</p>
          <span className="pokemonImgSpan">
            <img className="pokemonImg" src={items.sprites.other.home.front_default}></img>
          </span>
        </>
       );
     }
   }
 }
}

export default function FirstGen() {
  return (<DisplayManager />);
}

class DisplayManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: "Pokeball-bounce",
      display: "pokeball-closed"
    };
    this.changeAnimation = this.changeAnimation.bind(this);
    this.display = this.display.bind(this);
  }

  changeAnimation() {
      this.setState({
        animation: "Pokeball-shake"
      });
      this.display();
  }

  display() {
    if (this.state.animation === "Pokeball-shake") {
      setTimeout(function() { //Start the timer
        this.setState({
          display: "pokeball-opened"
        })//After 1 second, set render to true
      }.bind(this), 10)
    }
  }

  render() {
    const { animation } = this.state;
    let displayManager = () => {
      if (this.state.display === "pokeball-closed") {
        return (
          <div className="Pokeball-container">
            <div className={animation} onAnimationEnd={this.changeAnimation} >
              <ReactLogo />
            </div>
          </div>
        );
      } else if (this.state.display === "pokeball-opened") {
        return (
          <div className="Pokeball-container">
            <div className="Pokeball-open-red"></div>
            <div className="Pokeball-open-mid-red"></div>
            <div className="Pokeball-open-cover-useless-parts"></div>
            <div className="Pokeball-open-mid-white"></div>
            <div className="Pokeball-open-white"></div>
            <div className="Pokeball-white-ball"></div>
            <div className="Pokeball-white-ball-inside"></div>
            <div className="Pokeball-open-black-ball"></div>
            <div className="Pokeball-open-black-ball-fix-border"></div>
            <div className="Pokeball-open-red-style"></div>
            <div className="Pokeball-open-white-style"></div>
            <UniqueFirstGenPokemon />
          </div>
        );
      }
    };

    return <div className="Pokeball">{displayManager()}</div>;
  }
}
