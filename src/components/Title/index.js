import React from 'react'

import './Title.css'
import k_pop_video from './k-pop-video.mp4';


function Title() {
  return (
    <section 
      data-background-video={k_pop_video}
      data-background-video-loop
      data-background-video-muted
    >
      <div id="title-container">
        <h1 id="title">
          Why is K-pop so popular? Is it just a coincidence?
        </h1>
        <h2 id="author">- Yeongbae Jeon</h2>
        <h2 id="date">Dec 3 2021</h2>
      </div>
    </section>
  )
}

export default Title
