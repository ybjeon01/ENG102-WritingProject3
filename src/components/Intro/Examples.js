import React from 'react'

import {ContentCard, VideoCard} from '../types/Cards'

import {CSS} from '../../constants'

import squid_game from './imgs/squid-game.webp'
import SquidGameContent from './SquidGameContent'

import random_dance from './imgs/random-dance.webp'
import gangnan_style from './imgs/gangnam-style.webp'

import bts_rank1 from './imgs/billboard-bts-rank1.jpg'
import parasite_oscar from './imgs/parasite-oscar.jpg'


const videoCss = {
  overflow: 'hidden',
  width: '70%',
  height: '70%',
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "black"
}

const contentCss = {
  ...videoCss,
  width: 'auto',
  height: 'auto',
  border: CSS["content-border"],
  borderRadius: CSS["content-borderRadius"],
  backgroundColor: CSS["slide-backgroundColor"],
};


function Examples() {
  return (
    <div className="intro-examples">
      <ContentCard
        imageSrc={squid_game}
        imageCaption="Squid Game reached 111M viewers"
        idx={0}
        className="intro-example"
      >
        <SquidGameContent />
      </ContentCard>

      <VideoCard
        imageSrc={random_dance}
        imageCaption="K-pop random dance in Sweden"
        videoSrc="https://www.youtube.com/embed/LU-34LM3KkM"
        idx={1}
        className="intro-example"
      />

      <VideoCard
        imageSrc={gangnan_style}
        imageCaption="Gangnan style hit 2 billion views back in 2014"
        videoSrc="https://www.youtube.com/embed/9bZkp7q19f0"
        idx={2}
        className="intro-example"
      />
      <VideoCard
        imageSrc={bts_rank1}
        imageCaption="BTS peaked at #1"
        videoSrc="https://www.youtube.com/embed/gdZLi9oWNZg"
        idx={3}
        className="intro-example"
      />
      <VideoCard
        imageSrc={parasite_oscar}
        imageCaption="movie Parasite won oscar"
        videoSrc="https://www.youtube.com/embed/Wg_Ql89fWy4"
        idx={4}
        className="intro-example"
      />
    </div>
  )
}

export default Examples

export {videoCss, contentCss}
