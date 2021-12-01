import React from 'react'

import {ContentLink, VideoLink} from '../types/Cards'

import DarkSide from './examples/DarkSide'
import HardWork from './examples/HardWork'
import WhyPeopleLikeKpop from './examples/WhyPeopleLikeKpop'

function Explanation() {
  return (
    <div className="main3-explanation">
      <h1>What Did Entertainment Companies Do?</h1>
      <p className="main3-explanation-paragraph">
        Because {''}
        <ContentLink 
          content={DarkSide}
          idx={0}
          className="main3-example"
        >
          the market for the content industry in Korea is small,
        </ContentLink>
        {''} companies tried to expand their market 
        globally. The Korean content industry has been working hard to create global content,
        and the representative example is K-Pop. In the past, SM Entertainment had systematically
        planned an idol called BoA with the goal of success in Japan, and this success served as a
        basis for elaborating the system for exporting K-pop idols. Companies have done everything
        from street casting to overseas auditions exclusively for foreigners, and these
        days, {" "}
        <VideoLink
        idx={1}
        videoSrc="https://www.youtube.com/embed/NIld_iEc67s"
        className="main3-example"
        >
          they audition publicly on TV.
        </VideoLink>
      </p>
      <h1>What Else?</h1>
      <p className="main3-explanation-paragraph">
        Also, people who aim to become idols say that they want to become trainees at a large agency.
        Competition to become trainees at large agencies is fierce, and if trainees also fail the
        monthly evaluation, they have to pack up and go home. {" "}
        <ContentLink 
          content={HardWork}
          idx={2}
          className="main3-example"
        >
          After enduring training in singing, dancing, writing and composing, performing arts, foreign
          languages as well as personality, they can finally appear on TV.
        </ContentLink>
      </p>
      <p className="main3-explanation-paragraph">
        For music lovers, K-pop may be bad music. If you're looking for someone who can sing exceptionally
        well and compose good songs, you don't need to look elsewhere. I think that there are many good singers
        in America. However, what makes K-pop attractive comes from the breadth of all abilities, not the
        depth of specific abilities. For example, {" "}
        <ContentLink 
          content={WhyPeopleLikeKpop}
          idx={3}
          className="main3-example"
        >
          when asked why they like K-pop,
        </ContentLink>
        {" "} most answered that there are many things to see, such as good looks, choreography, and splendid
        performances. In other words, it is differentiated in that it is music to be seen rather
        than listened to.
      </p>
      <h1>Summary</h1>
      <p className="main3-explanation-paragraph">
        The innate limitation of a narrow market led to a high amount of effort to export, and as a
        global platform such as YouTube was created, K-pop grew explosively. Because of this I think
        that it is possible that K-pop groups like BTS will come out in the future.
      </p>
    </div>
  )
}

export default Explanation
