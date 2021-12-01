import React, {useEffect, useContext, useRef} from 'react'
import {gsap} from 'gsap'

import './Main2.css'

import {CardController} from '../types/Cards'
import Context from '../types/Context'
import {CSS} from '../../constants'

import Explanation from './Explanation'


const videoCss = {
  overflow: 'hidden',
  width: '70%',
  height: '70%',
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "black"
}

const contentCss = {
  overflow: 'auto',
  maxWidth: '70%',
  maxHeight: '90%',
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  border: CSS["content-border"],
  borderRadius: CSS["content-borderRadius"],
  backgroundColor: CSS["slide-backgroundColor"],
};


function Main2({indexv, indexh}) {
  const {slideChangedMiddleware} = useContext(Context);

  const controller = useRef();
  const title = useRef();
  const container = useRef();

  let query = gsap.utils.selector(container);

  useEffect(() => {
    let cards = query(".main2-example");

    // hover effect
    // According to gsap doc, css animation and gsap animation should be
    // used together.
    cards.forEach((card) => {
      const hover = gsap.to(
        card,
        {
          scale: 1.05,
          duration: .1,
          paused: true
        }
      );
      card.addEventListener("mouseenter", () => hover.play());
      card.addEventListener("mouseleave", () => hover.reverse());
    });

    slideChangedMiddleware.register(indexv, indexh, () => {
      let [controllerState, dispatch] = controller.current;

      // if user already clicked card, no animation effects
      if (controllerState.click === true) {
        return;
      }
      let tl = gsap.timeline();
      tl.to(title.current, {top: '0vh', opacity: 1, duration: 0})
        .to(title.current, {opacity: 0, duration: 1.5, delay: 2})
        .to(title.current, {top: '-120vh'});

    });

    return 
  }, [indexv, indexh, slideChangedMiddleware, query]);

  return (
    <section data-background-color={CSS["slide-backgroundColor"]}>
      <div className="main2-title" ref={title}>
        <div></div>

        <p>
          Chapter 2<br/>
          Economic And Political Stability
        </p>
      </div>

      <CardController
        videoCss={videoCss}
        contentCss={contentCss}
        stateRef={controller}
      >
        <div className="main2-container" ref={container}>
          <Explanation />
        </div>
      </CardController>

    </section>
  )
}

export default Main2
