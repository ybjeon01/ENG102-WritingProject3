import React, {useEffect, useContext, useRef} from 'react'
import {gsap} from 'gsap'

import './Intro.css'

import Context from '../types/Context'
import {ANIMATION_OPTIONS, CSS} from '../../constants'

import {CardController} from '../types/Cards'

import Explanation from './Explanation'
import Examples from './Examples'
import {videoCss, contentCss} from './Examples'


function Intro({indexv, indexh}) {
  const {slideChangedMiddleware} = useContext(Context);

  // reference to state of child element, videoController. 
  const videoController = useRef();

  // reference to content the topmost container
  const introRef = useRef();
  let query = gsap.utils.selector(introRef);

  useEffect(() => {
    // these class are in 'Exmplanation.js' and 'Example.js'
    let explanation = query(".intro-explanation");
    let examples = query(".intro-example");

    // hover effect
    // According to gsap doc, css animation and gsap animation should be
    // used together.
    examples.forEach((example) => {
      const hover = gsap.to(
        example,
        {
          scale: 1.05,
          duration: .1,
          paused: true
        }
      );
      example.addEventListener("mouseenter", () => hover.play());
      example.addEventListener("mouseleave", () => hover.reverse());
    });

    slideChangedMiddleware.register(indexv, indexh, () => {
      let [videoControllerState, dispatch] = videoController.current;
      
      // if user already clicked card, no animation effects
      if (videoControllerState.click === true) {
        return;
      }

      // explanation box from the top
      gsap.fromTo(
        explanation,
        {y: '-120%'},
        {y: '0%', ...ANIMATION_OPTIONS }
      );

      // images coming from the right
      gsap.fromTo(
        examples,
        {x: '120vw'},
        {x: '0%', stagger: 0.1}
      );
    });

    return 
  }, [indexv, indexh, slideChangedMiddleware, query]);

  return (
    <section data-background-color={CSS["slide-backgroundColor"]}>
      <CardController
        videoCss={videoCss}
        contentCss={contentCss}
        stateRef={videoController}
      >
        <div className="intro-container" ref={introRef}>
          <Explanation />
          <Examples />
        </div>
      </CardController>
    </section>
  )
}

export default Intro