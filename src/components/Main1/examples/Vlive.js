import React from 'react'

import kpop_vlive from '../imgs/kpop-vlive.JPG'

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center"
}

const img_style = {
  width: "90%",
  margin: "0.5rem",
  borderRadius: "15px"
}


function Vlive() {
  return (
    <div className="main1-example-content-container">
      <img
        src={kpop_vlive}
        alt="kpop vlive search result"
        style={img_style}
      />
    </div>
  )
}

export default Vlive
