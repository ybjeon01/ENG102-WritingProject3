import React from 'react'

import playstation from '../imgs/playstation.png'
import nintendo from '../imgs/nintendo.jpg'
import mario from '../imgs/mario.webp'
import pokemon from '../imgs/pokemon.webp'
import sonic from '../imgs/sonic.jpg'

import digimon from '../imgs/digimon.jpg'
import cowboy_bebop from '../imgs/cowboy-bebop.jpg'
import ghibli from '../imgs/ghibli.jpeg'
import onepiece from '../imgs/onepiece.jpg'

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center"
}

const img_style = {
  width: "30%",
  aspectRatio: "8 / 6",
  margin: "0.5rem"
}

function JapanCulturalIndustry() {
  return (
    <div style={style} className="example-content-container">
      <img
        src={playstation}
        alt="playstation"
        style={img_style}
      />
      <img
        src={nintendo}
        alt="nintendo"
        style={img_style}
      />
      <img
        src={mario}
        alt="mario"
        style={img_style}
      />
      <img
        src={pokemon}
        alt="pokemon"
        style={img_style}
      />
      <img
        src={sonic}
        alt="sonic"
        style={img_style}
      />
      <img
        src={digimon}
        alt="digimon"
        style={img_style}
      />
      <img
        src={cowboy_bebop}
        alt="cowboy bebop"
        style={img_style}
      />
      <img
        src={ghibli}
        alt="ghibli"
        style={img_style}
      />
      <img
        src={onepiece}
        alt="one piece"
        style={img_style}
      />
    </div>
  )
}

export default JapanCulturalIndustry
