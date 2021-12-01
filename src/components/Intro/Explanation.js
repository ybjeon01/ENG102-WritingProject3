import React from 'react'

import {Card} from "../types/Cards"

import what_is_love from './imgs/20yrs/what-is-love.jpg'
import hot from './imgs/20yrs/HOT.jpg'
import boa from './imgs/20yrs/BOA.jpg'
import winter_sonata from './imgs/20yrs/winter-sonata.jpg'
import dae_jang_geum from './imgs/20yrs/dae-jang-geum.jpg'
import gang_nam_style from './imgs/20yrs/gang-nam-style.jpg'

import my_love_from_the_star from './imgs/20yrs/my-love-from-the-star.jpg'
import descendants_of_the_sun from './imgs/20yrs/descendants-of-the-sun.jpg'
import bts from './imgs/20yrs/BTS.webp'
import parasite from './imgs/20yrs/parasite.jpg'
import minari from './imgs/20yrs/minari.jpg'
import squid_game from './imgs/20yrs/squid-game.webp'


function Explanation() {
  return (
    <div className="intro-explanation">
      <p className="intro-explanation-paragraph">
        When I first went to the United States in 2011, people didn't know much about Korea.
        Due to the news of North Korea, South Korea was only known by its name. People knew
        more about Japan and China. However, Gangnam Style exceeded 2 billion views in 2014,
        and the squid game exceeded 111 million viewers in a really short time in 2021. The
        movie Parasite won the Oscar in 2020, and some K-pop music skyrocketed to NO. 1 on
        the Billboard chart. Also there are interesting events called "Random play dance".
        When any K-pop song is played, anyone who knows the song's choreography comes out and
        dances. Besides famous groups like BTS and Black Pink, people dance to new idol songs
        that even Koreans do not know well. 
      </p>  
      <p className="intro-explanation-paragraph"> 
        In Korea, there is criticism that this popularity is a coincidence and cannot be
        sustained. The reasons for the criticism are as follows: "BTS did well, not K-Pop",
        "there is no next generation of BTS", and "Squid Game did well, not K-drama".
        I also used to think that the popularity was just a coincidence. However, in the past 20
        years, there have been several successful cases in Asia, and in the last 10 years,
        it has gradually become famous in the West. One success may be a coincidence, but
        repetitive success has a reason. Through this article today, we will find out how K-pop
        and dramas have gained popularity and if the next generation of BTS can come out.
      </p>

      <div className="intro-explanation-history">
        <Card
            imageSrc={what_is_love}
            imageCaption={"what is love (1997)"}
            className="intro-explanation-history-card"
        />
        <Card
            imageSrc={hot}
            imageCaption={"H.O.T (2000)"}
            className="intro-explanation-history-card"
        />
        <Card
            imageSrc={boa}
            imageCaption={"BOA (2001)"}
            className="intro-explanation-history-card"
        />
        <Card
            imageSrc={winter_sonata}
            imageCaption={"Winter Sonata (2003)"}
            className="intro-explanation-history-card"
        />
        <Card
            imageSrc={dae_jang_geum}
            imageCaption={"Dae Jan Geum (2005)"}
            className="intro-explanation-history-card"
        />
        <Card
            imageSrc={gang_nam_style}
            imageCaption={"PSY (2012)"}
            className="intro-explanation-history-card"
        />

        <Card
            imageSrc={my_love_from_the_star}
            imageCaption={"My love from the sky (2013)"}
            className="intro-explanation-history-card"
        />
        <Card
            imageSrc={descendants_of_the_sun}
            imageCaption={"Descendants of the sun (2016)"}
            className="intro-explanation-history-card"
        />
        <Card
            imageSrc={bts}
            imageCaption={"BTS (2019)"}
            className="intro-explanation-history-card"
        />
        <Card
            imageSrc={parasite}
            imageCaption={"Parasite (2020)"}
            className="intro-explanation-history-card"
        />        
        <Card
        imageSrc={minari}
        imageCaption={"Minari (2021)"}
        className="intro-explanation-history-card"
        />
        <Card
        imageSrc={squid_game}
        imageCaption={"Squid Game (2021)"}
        className="intro-explanation-history-card"
        />
      </div>

      <p className="intro-explanation-help">
        If you click the images on the right side, you can watch videos or a detailed description.
      </p>
  </div>
  )
}

export default Explanation
