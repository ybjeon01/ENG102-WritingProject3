import React from 'react'

import doctor_strange from '../imgs/doctor-strange.webp'

const img_style1 = {
  float: 'left',
  width: '40%',
  margin: '1rem',
  borderRadius: '15px'
}


function ChinaPolitics() {
  return (
    <div className="main2-example-content-container">
      <img
        src={doctor_strange}
        alt="doctor strange celtic"
        style={img_style1}
      />
      <p className="main2-example-content-explanation">
        With Chinese Investment in Hollywood films, Chinese political thoughts are being permeated
        into movies. The Ancient One in the movie 'Doctor Strange' was originally Tibetan, but was
        changed to be Celtic. 
      </p>
      <ul style={{listStyle: 'none'}} className="main2-example-content-link">
        <li>
          <a 
            href="https://www.nbcnews.com/news/asian-america/tibet-supporters-protest-marvel-s-dr-strange-over-changed-character-n677706"
            rel="noreferrer"
            target="_blank"
          >
            Tibet Supporters Protest Marvel's 'Doctor Strange' over Changed Character
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ChinaPolitics
