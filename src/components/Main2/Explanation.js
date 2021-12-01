import React from 'react'

import {ContentLink, VideoLink} from '../types/Cards'

import JapanCulturalIndustry from './examples/JapanCulturalIndustry'
import CulturalRevolution from './examples/CulturalRevolution'
import BTSFandom from './examples/BTSFandom'
import ChinaPolitics from './examples/ChinaPolitics'
import PressFreedomIndex from './examples/PressFreedomIndex'

function Explanation() {
  return (
    <div className="main2-explanation">
    <p className="main2-explanation-paragraph">
      Basically, there are three steps in the process of becoming a developed country:
      economic growth, political stability and cultural growth. 
    </p>
    <h1>Economic Stability</h1>
    <p className="main2-explanation-paragraph">
      First of all, as humans started farming and settled life, urban civilization was born. Based on
      food surpluses and economic prosperity, the urban civilization was able to create their own arts
      and cultures. In Asia, for example, {" "}
      <ContentLink 
        content={JapanCulturalIndustry}
        idx={0}
        className="main2-example"
      >
        Japan developed a cultural industry based on economic prosperity in the late 20th century,
      </ContentLink>
      {" "} leading the world market with Nintendo and PlayStation in
      games and Dragon Ball and Ghibli in animation. As a result, Countries facing financial hardship
      envy these cultural strengths while at the same time that the artwork was a new experience in
      the Western world. However, with the recent growth of the Korean economy, I think this baton is
      being passed on to Korea. In the past, Korea used to receive the culture of other countries, but
      now it is giving away its culture to other countries. Now, {" "}
      <VideoLink
        videoSrc="https://data.worldbank.org/share/widget?end=2020&indicators=NY.GDP.MKTP.CD&locations=KR&start=1960&view=chart"
        idx={1}
        className="main3-example"
      >
      Korea's GDP ranks ninth in the world
      </VideoLink>
      {" "} and fourth in Asia which means that basic requirements such as capital and technology necessary for
      the cultural industry are in place. Of course, internally, issues such as high suicide rate, {" "}
      <VideoLink
        videoSrc="https://data.worldbank.org/share/widget?contextual=region&end=2019&indicators=SP.DYN.TFRT.IN&locations=KR&start=1960&type=points&view=chart"
        idx={2}
        className="main3-example"
      >
      the lowest fertility rate,
      </VideoLink>
      {" "} and income polarization pose potential risks, but for now, the economic
      requirements have been met. 
    </p>
    <p className="main2-explanation-paragraph">
      However, actually, considering the size of the economy, the turn should have gone to China before
      Korea. China's GDP ranks first in Asia, and culturally China was the center of Eastern Asia,
      and even the neighboring countries were influenced by Chinese characters. Then, how did Korean K-pop
      gain popularity before Chinese pop? Here, it turns out that there is one more prerequisite for cultural
      development: political stability. 
    </p>
    <h1>Political Stability</h1>
    <p className="main2-explanation-paragraph">
      China has blocked the growth of its culture through repeated cultural oppression, the dictatorship
      of the Communist Party, and {" "}
      <ContentLink 
        content={CulturalRevolution}
        idx={3}
        className="main2-example"
      >
        the destruction of cultural heritage.
      </ContentLink>
      {" "} Even recently, this has gotten worse.
      For example, recently, China enacted laws such as 'dissolving fan clubs that raise money for
      celebrities' and 'prohibition of duplicate album purchases'. In Korea, there was a time when fandom
      culture became a social issue. However, Korea did not ban fandom activities like China did. As a result,
      fandom helped their idols become famous. For example, {" "}
      <ContentLink 
        content={BTSFandom}
        idx={4}
        className="main2-example"
      >
        a fandom helped BTS become famous
      </ContentLink>
      {" "} by creating and distributing guidelines for BTS to enter the Billboard chart. On the other hand,
      China is suppressing this fandom culture at an early stage, which can be seen as eliminating the
      fundamental energy that makes stars. Furthermore, China, which has been blocking cultural growth
      in this way, is influencing content around the world with its capital. As the government is pushing
      ahead with contents aimed at spreading its own political ideology, {" "}
      <ContentLink 
        content={ChinaPolitics}
        idx={5}
        className="main2-example"
      >
        it is negatively impacting the cultural industry.
      </ContentLink>
      {" "} As long as they keep the laws of suppressing art and creation, I think it will be
      difficult for their culture to become famous all over the world. 
    </p>
    <h1>What Else?</h1>
    <p className="main2-explanation-paragraph">
      In summary, industrialization stimulates industrialization which in turns, stimulates national income
      rises. and then the income rises accelerates the demand of democracy in which finally people can do 
      creative works. Unfortunately, there are not many countries in Asia that have achieved both economic
      growth and political stability than expected. Threats such as Dictatorships, religious conflicts,
      ethnic conflicts, civil wars, and poverty still lurk in Asia. Also, {" "}
      <ContentLink 
        content={PressFreedomIndex}
        idx={6}
        className="main2-example"
      >
        Korea's press freedom index ranks 42nd in the world.
      </ContentLink>
      {" "} This ranking is not high, but it is the highest in Asia. This means that creative
      freedom was at least guaranteed and K-pop had an opportunity to gain popularity among Asian countries.
      However, this is not enough. Let's see what efforts the entertainment companies have put into the K-pop
      industry. 
    </p>
  </div>
  )
}

export default Explanation
