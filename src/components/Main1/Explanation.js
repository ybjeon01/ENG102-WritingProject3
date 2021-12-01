import React from 'react'

import {ContentLink, VideoLink} from '../types/Cards'

import WonderGirlsStory from './examples/WonderGirlsStory'
import BTSstory from './examples/BTSstory'
import OTTMarket from './examples/OTTMarket'
import Vlive from './examples/Vlive'


function Explanation() {
  return (
    <div className="main1-explanation">
      <h1>Before The Emergence Of a Global Platform</h1>
      <p className="main1-explanation-paragraph">
        The Korean Wave has long been trapped in Asia. Before BTS or BLACKPINK, K-pop
        was popular in Taiwan, China, Japan, and Southeast Asia. Of course, CEOs of many
        large K-pop companies tried to enter the U.S. market, but most attempts failed
        because it was difficult to promote music in the United States. Due to
        numerous failures, criticism emerged that the K-pop market was limited to Asia. 
      </p>
      <p className="main1-explanation-paragraph">
        In order to promote music, it was necessary to broadcast the music on the radio and
        connect with local agencies. However, broadcasters were unlikely to want to broadcast K-pop
        idols whose profitability is uncertain.{" "}
        <ContentLink 
        content={WonderGirlsStory}
        idx={0}
        className="main1-example"
        >
          When K-pop companies tried to enter the U.S. music market,
        </ContentLink>
        {" "} no broadcast companies welcomed those k-pop companies, and it was not easy to promote
        K-pop music. 
      </p>
      <h1>The Emergence Of a Global Platform</h1>
      <p className="main1-explanation-paragraph">
        Relatively recently, a new way of promoting without interacting directly with these
        companies emerged. It was a global platform such as YouTube and Netflix. The platforms'
        algorithm automatically promoted and distributed content worldwide for free. For example, {" "}
      <ContentLink 
        content={BTSstory}
        idx={1}
        className="main1-example"
      >
        BTS was once difficult to even appear on Korean TV,
      </ContentLink>
        {" "} but BTS gained worldwide
        popularity via Youtube. In particular, YouTubers naturally promoted K-pop music by filming
        secondary creations such as reaction videos and review videos. In addition, by sharing
        videos that people enjoyed watching, contents quickly spread to various online communities
        in the second and third rounds.
      </p> 
      <p className="main1-explanation-paragraph">
        As more time is spent at home due to the coronavirus, {" "}
        <ContentLink 
        content={OTTMarket}
        idx={2}
        className="main1-example"
      >
        Platform companies have achieved several years of growth at once.
      </ContentLink>
        {" "} As a result, platform companies have stronger power
        than traditional media companies, creating a more advantageous environment for the spread
        of K-pop content. 
      </p>
      <p className="main1-explanation-paragraph">
        Traditional media should produce maximum profit for a limited time when organizing and
        scheduling of broadcast media shows. To broadcast commercial content mainly, images of
        celebrities were mostly made for the benefit of broadcasters, and we couldn't see their
        real selves. However, with the advent of YouTube, {" "}
      <ContentLink 
        content={Vlive}
        idx={3}
        className="main1-example"
      >
        celebrities were able to communicate directly with their fans,
      </ContentLink>
        {" "} and show the human and sincere side including behind-the-scenes stories
        of their work, and personal concerns. BTS is the first case that gained a global fandom
        with such interactive content. 
      </p>
      <h1>Why Korea?</h1>
      <p className ="main1-explanation-paragraph">
        But you might think, "Why is it Korea? Other countries can also take advantage of the new
        platforms." Let's see another reason in the next slides.
      </p>
    </div>
  )
}

export default Explanation
