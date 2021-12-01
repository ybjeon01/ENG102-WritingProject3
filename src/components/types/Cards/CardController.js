import React, {useReducer, useEffect, useRef} from 'react'

import {gsap} from 'gsap'

import "./CardController.css"

let CardControllerContext = React.createContext();

const initialState = {
  click: false,
  idx: 0,
  videoSrc: undefined
};

/*
  action: {type: 'click', idx: ..., videoSrc: ...}
  action: {type: 'click', idx: ..., children: ...}
  action: {type: 'unclick'}
*/
function reducer(state, action) {
  if (action.type === 'click') {
    if (action.children) {
      return {
        click: true,
        idx: action.idx,
        children: action.children
      }
    }
    else if (action.videoSrc){
      return {
        click: true,
        idx: action.idx,
        videoSrc: action.videoSrc
      };
    }
  }
  else if (action.type === 'unclick'){
    return initialState;
  }
  throw new Error();
}


function VideoCardController({
  children,
  videoCss,
  contentCss,
  stateRef
}) {
  const [controllerState, dispatch] = useReducer(reducer, initialState);
  const video_or_content = useRef();

  stateRef.current = [controllerState, dispatch];

  // video or content animation effect
  useEffect(() => {
    if (video_or_content.current) {
      gsap.from(
        video_or_content.current,
        {
          opacity: 0,
          duration: 0.7
        }
      );
    }
  });

  return (
    <CardControllerContext.Provider value={{controllerState, dispatch}}>
      {
        controllerState.click &&
        <div
          onClick={() => dispatch({type: "unclick"})}
          className="video-background"
        >
        </div>
      }
      {
        controllerState.click && controllerState.videoSrc &&
        <iframe 
            src={controllerState.videoSrc}
            title="YouTube video player"
            style={videoCss}
            className="video-iframe"
            ref={video_or_content}x
        />
      }
      {
        controllerState.click && controllerState.children &&
        <div 
          style={contentCss}
          className="content-div"
          ref={video_or_content}
        >
          {controllerState.children}
        </div>
      }
      {children}

    </CardControllerContext.Provider>
  )
}

export default VideoCardController
export {CardControllerContext}
