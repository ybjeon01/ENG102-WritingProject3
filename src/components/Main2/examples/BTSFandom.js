import React from 'react'

import BTS_whitepaper from '../imgs/BTS-WhitePaper.JPG'
import BTS_fandom_reminders from '../imgs/BTS-fandom-reminders.jpg'

const img_style1 = {
  float: 'left',
  width: '40%',
  margin: '1rem',
  borderRadius: '15px'
}

const img_style2 = {
  float: 'right',
  clear: 'both',
  width: '40%',
  margin: '1rem',
  borderRadius: '15px'
}

const p_style2 = {
  clear: 'left'
}

function CulturalRevolution() {
  return (
    <div className="main2-example-content-container">
      <img
        src={BTS_whitepaper}
        alt="BTS WhitePaper"
        style={img_style1}
      />
      <p className="main2-example-content-explanation">
        The White Paper Project is a report published by some
        of the ARMYs who are fans of BTS in order to look back
        on the controversy and events that took place around the
        world with respect to the t-shirt worn by Jimin BTS.
      </p>
      <ul style={{listStyle: 'none'}} className="main2-example-content-link">
        <li>
          <a 
            href="https://whitepaperproject.com/en.html"
            rel="noreferrer"
            target="_blank"
          >
            White Paper Project
          </a>
        </li>
      </ul>
      <img
        src={BTS_fandom_reminders}
        alt="BTS fandom reminders"
        style={img_style2}
      />
      <p style={p_style2} className="main2-example-content-explanation">
        ARMY created and distributed guidelines for BTS' music chart rankings.
      </p>
    </div>
  )
}

export default CulturalRevolution
