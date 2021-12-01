import React from 'react'

import JYP from '../imgs/JYP.JPG'

const img_style1 = {
  float: 'left',
  width: '40%',
  margin: '1rem',
  borderRadius: '15px'
}


function WonderGirlsStory() {
  return (
    <div className="main1-example-content-container">
      <img
        src={JYP}
        alt="CEO of JYP entertainment"
        style={img_style1}
      />
      <p className="main1-example-content-explanation"> 
        The Wonder Girls, who had great success in Korea in 2008, went to the United States for
        their global debut, but failed. Although they had chance to perform, they could not
        broadcast on TV or radio.
      </p>

      <p className="main1-example-content-explanation">
        In 2020, Park Jin Young, a producer and CEO of JYP entertainment, said that "I poured my
        money and time into my plans to debut three new groups in 2008. But it all fell through
        as a result."
      </p>
    </div>
  )
}

export default WonderGirlsStory
