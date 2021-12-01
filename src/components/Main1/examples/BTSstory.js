import React from 'react'

const lyrics_style = {
  backgroundColor: 'rgb(0,0,0, 0.4)',
  borderRadius: '15px',
  padding: '1rem'
}

const lyrics_title_style = {
  textAlign: "end"
}


function BTSstory() {
  return (
    <div className="main1-example-content-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/K2pLIcGHUEE?start=136"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>  
      </iframe>
      <p style={lyrics_style} className="main1-example-content-explanation"> 
        A medium-sized, ordinary idol was my second name <br/>
        Countless people get cut from broadcast, But someone's empty spot is our dream <br />
        They say some of these kids can't make it cause their agency is too small <br />
      
        <p style={lyrics_title_style}>
          - From BTS [Sea] lyrics
        </p>
      </p>
      <p className="main1-example-content-explanation">
        Before BTS became popular, they are also cut from broadcast. However,
        BTS has gained global popularity due to YouTube.
      </p>
    </div>
  )
}

export default BTSstory
